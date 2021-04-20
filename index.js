const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

const tables = [];
const waitlist = [];

//app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/tables", (req, res) => res.sendFile(path.join(__dirname, "tables.html")));

app.get("/reserve", (req, res) => res.sendFile(path.join(__dirname, "reserve.html")));

app.get("/api/tables", (req, res) => res.json(tables));

app.get("/api/waitlist", (req, res) => res.json(waitlist));

app.get('/', (req, res) => {
    res.send('server live!')
})

app.post("/api/tables", (req, res) => {
    const newTable = req.body;
    console.log(newTable);
    

})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
