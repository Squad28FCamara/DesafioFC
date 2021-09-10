import express from "express";
import nunjucks from "nunjucks";
import router from "./router.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("assets"));
app.use(router);

app.set("view engine", "njk");

nunjucks.configure("views", {
  express: app,
  noCache: true,
});

app.get("/", router);

app.post("/", router);

app.listen(5000, () => {
  try {
    readFile(global.fileName);
  } catch (err) {}

  console.log("Server is running");
});
