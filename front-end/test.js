const { readFileSync } = require('fs');

const data = JSON.parse(readFileSync("data.json").toString);

console.log(data.reservations);
