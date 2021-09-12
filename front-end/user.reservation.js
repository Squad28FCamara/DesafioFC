import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

const data = JSON.parse(await readFile("data.json"));

export function create(req, res) {
  const reservation = req.body;

  if (reservation.pole == "" || reservation.date == "") {
    console.log("Nop");
  } else {
    data.reservations.push(reservation);
    writeFile("data.json", JSON.stringify(data, null, 2));
    return res.send(data);
  }
}
