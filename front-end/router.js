import express from "express";

const app = express();

const router = express.Router();

router.get("/", (req, res) => res.render("index"));

export default router;
