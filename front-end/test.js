import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

const data = JSON.parse(await readFile("data.json"));

console.log(data.reservations);
