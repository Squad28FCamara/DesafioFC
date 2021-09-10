import express from "express";
import nunjucks from "nunjucks";
import router from "./router.js";
import winston from "winston";
import path from "path";

const app = express();

<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
=======
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

>>>>>>> parent of 1eb27fa (winston and .log removed)
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

<<<<<<< HEAD
app.post("/", router);

app.listen(5000, () => {
  try {
    readFile(global.fileName);
  } catch (err) {}

  console.log("Server is running");
=======
app.listen(5000, () => {
  try {
    global.logger.info("Server is running");
  } catch (err) {
    global.logger.error(err);
  }
>>>>>>> parent of 1eb27fa (winston and .log removed)
});
