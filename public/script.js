const e = require("express");

const viewBtn = document.querySelector('#viewTables');
const reserveBtn = document.querySelector('#makeRes');
const form = document.querySelector('#form');

viewBtn.addEventListener('click', () => {
    fetch('/tables', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          },
    })
})


reserveBtn.addEventListener('click', () => {
    fetch('/reserve', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          },
    })
})

form.addEventListener('submit', () => {
    e.preventDefault();
    fetch(`/api/tables`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
})
