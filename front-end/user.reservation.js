const { readFileSync, writeFileSync } = require('fs');

const data = JSON.parse(readFileSync('data.json').toString());

function create(req, res) {
  const reservation = req.body;

  if (
    !reservation.pole ||
    !reservation.seat ||
    !reservation.station ||
    !reservation.date ||
    !reservation.floor
  ) {
    console.log('Nop');
  } else {
    data.reservations.push(reservation);
    writeFileSync('data.json', JSON.stringify(data, null, 2));
    return res.send(data);
  }
}

module.exports = create;
