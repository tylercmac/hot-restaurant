const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

const tables = [];
const waitlist = [];

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/tables", (req, res) => res.sendFile(path.join(__dirname, "/views/tables.html")));

app.get("/reserve", (req, res) => res.sendFile(path.join(__dirname, "/views/reserve.html")));

app.get("/api/tables", (req, res) => res.json(tables));

app.get("/api/waitlist", (req, res) => res.json(waitlist));


app.post("/api/tables", (req, res) => {
    const newTable = req.body;
    console.log(newTable);
    if(tables.length < 5) {
        newTable.hasTable = true;
    tables.push(newTable);
    } else {
        newTable.hasTable = false;
        waitlist.push(newTable);
    }
    res.json(newTable);
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
