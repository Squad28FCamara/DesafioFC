import express from "express";
import { create, reservation, confirm } from "./user.reservation.js";

import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

const app = express();

const router = express.Router();

const data = JSON.parse(await readFile("data.json"));

let location = "";

app.use(express.json());

router.get("/login", (req, res) => res.render("login"));

router.get("/", (req, res) => {
  location = "Dashboard";
  res.render("dashboard", { data, location });
});

router.get("/reserve", (req, res) => {
  location = "Reservar";

  res.render("reserves/reserve", { data, location });
});

router.post("/reserve", create);

router.post("/confirmation", confirm);

router.get("/review", (req, res) => {
  location = "Reservar";

  res.render("reserves/review", { reservation, location });
});

router.get("/covid", (req, res) => {
  location = "COVID-19";
  res.render("covid", { data, location });
});

export default router;
