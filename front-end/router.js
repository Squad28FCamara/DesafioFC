import express from "express";

const app = express();

const router = express.Router();

router.get("/", (req, res) => res.render("dashboard"));

router.get("/covid", (req, res) => res.render("covid"));

export default router;
