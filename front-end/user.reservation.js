import { promises as fs, writeFileSync } from "fs";

const { readFile, writeFile } = fs;

const data = JSON.parse(await readFile("data.json"));

export function create(req, res) {
  const reservation = req.body;

  if (
    reservation.pole == "" ||
    reservation.date == "" ||
    reservation.station == "" ||
    reservation.seat == ""
  ) {
    console.log("Nop");
  } else {
    data.reservations.push(reservation);

    return res.redirect("/review");
  }
}

export function confirm() {
  WriteFileSync("data.json", JSON.stringify(data, null, 2));
}
