import express from "express";
import nunjucks from "nunjucks";
import router from "./router.js";
import winston from "winston";
import path from "path";

const app = express();

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp}, [${label}] ${level}: message`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "fcamara.log" }),
  ],
  format: combine(label({ label: "fcamara" }), timestamp(), myFormat),
});

app.use(express.static("public"));
app.use(express.static("assets"));
app.use(router);

app.set("view engine", "njk");

nunjucks.configure("views", {
  express: app,
  noCache: true,
  autoescape: false,
});

app.get("/", router);

app.listen(5000, () => {
  try {
    global.logger.info("Server is running");
  } catch (err) {
    global.logger.error(err);
  }
});
