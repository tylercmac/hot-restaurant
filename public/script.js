const { response } = require("express");
const e = require("express");

const form = document.querySelector('#form');
const reserveList = document.querySelector('#reserve-list');
const waitList = document.querySelector('#wait-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
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
            const reserveTable = document.createElement('li');
            reserveTable.textContent = datum;
        }
    })    
}
