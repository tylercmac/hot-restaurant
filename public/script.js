const { response } = require("express");


const form = document.querySelector('#form');
const reserveList = document.querySelector('.tablelist');
const waitList = document.querySelector('#wait-list');
const viewTables = document.querySelector('.view-tables')

form.addEventListener('Submit', (e) => {
    e.preventDefault();
    console.log('submit is working')
    
    let tableName = document.getElementById('name').value.trim();
    let tablePhone = document.getElementById('phone').value.trim();
    let tableEmail = document.getElementById('email').value.trim();
    let tableId = document.getElementById('id').value.trim();
    
    let newTable = {
        name: tableName,
        phone: parseInt(tablePhone) ,
        email: tableEmail,
        id: parseInt(tableId),
    }

        fetch(`/api/tables`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTable)
          })
          .then((response) => response.json())
          .then((data) => {
              if(data.hasTable) {
            alert(`Adding table for: ${data.name}`);
              } else {
                  alert('Put on waitlist- no more open tables!')
              }
              createReserveTable();
          })
          .catch((error) => {
            console.error('Error:', error);
          });

})

const createReserveTable = () => {
    fetch(`/api/tables`, {
        method: `GET`,
        headers: {
            'Content-Type': 'application/json',
          }
    })
    .then((response) => response.json())
    .then((data) => {
        for (const datum of data) {
            const reserveTable = `        
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${datum.id}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${datum.name}</li>
                <li class="list-group-item">Phone: ${datum.phone}</li>
                <li class="list-group-item">Email: ${datum.email}</li>
                <li class="list-group-item">ID: ${datum.id}</li>
            </ul>
        </div>`
    
            reserveList.append(reserveTable);
        }
    })    
}


