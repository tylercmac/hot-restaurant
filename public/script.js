const e = require("express");

const form = document.querySelector('#form');

form.addEventListener('submit', () => {
    e.preventDefault();
    fetch(`/api/tables`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
})
