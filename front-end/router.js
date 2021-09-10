import express from "express";
import { create } from "./user.reservation.js";

import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

const app = express();

const router = express.Router();

const data = JSON.parse(await readFile("data.json"));

app.use(express.json());

router.get("/", (req, res) => res.render("dashboard", { data }));

router.get("/reserve", (req, res) => res.render("reserve", { data }));

router.post("/reserve", create);

export default router;
