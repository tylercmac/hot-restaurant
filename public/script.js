const e = require("express");

const form = document.querySelector('#form');

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
