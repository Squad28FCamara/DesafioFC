import express from "express";
import { create, reservation, confirm } from "./user.reservation.js";

import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

const app = express();

const router = express.Router();

const data = JSON.parse(await readFile("data.json"));

app.use(express.json());

router.get("/login", (req, res) => res.render("login"));

router.get("/", (req, res) => res.render("dashboard", { data }));

router.get("/reserve", (req, res) => res.render("reserve", { data }));

router.post("/reserve", create);

router.post("/confirmation", confirm);

router.get("/review", (req, res) => res.render("review", { reservation }));

router.get("/covid", (req, res) => res.render("covid", { data }));

export default router;
