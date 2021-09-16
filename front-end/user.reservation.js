import { promises as fs, writeFileSync } from "fs";

const { readFile, writeFile } = fs;

const data = JSON.parse(await readFile("data.json"));

let reservation = null;

export async function create(req, res) {
  reservation = req.body;

  if (
    !reservation.pole ||
    !reservation.date ||
    !reservation.station ||
    !reservation.seat ||
    reservation.floor == ""
  ) {
    console.log("Nop");
  } else {
    res.redirect("/review");
  }
}

export { reservation };

export async function confirm(req, res) {
  data.reservations.push(reservation);

  await writeFile("data.json", JSON.stringify(data, null, 2));

  console.log("Foi");
}
