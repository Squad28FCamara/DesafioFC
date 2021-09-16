const { readFileSync, writeFileSync } = require('fs');

const data = JSON.parse(readFileSync('data.json').toString());

let reservation = null;

async function create(req, res) {
  reservation = req.body;

  if (
    !reservation.pole ||
    !reservation.date ||
    !reservation.station ||
    !reservation.seat ||
    !reservation.floor
  ) {
    console.log('Nop');
  }
}

function confirm(req, res) {
  data.reservations.push(reservation);

  writeFileSync('data.json', JSON.stringify(data, null, 2));

  console.log('Foi');
}

module.exports = {
  create,
  reservation,
  confirm,
};
