const path = require("path");

const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 8080;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", async (_req, res) => {
  const data = await axios
    .get("http://localhost:3000/db")
    .then((res) => res.data)
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  res.render("pages/cv", data);
});

app.get("/software-skills", async (_req, res) => {
  const data = await axios
    .get("http://localhost:3000/db")
    .then((res) => res.data)
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  res.render("pages/software-skills", data);
});

app.listen(PORT, () => {
  console.log(`Server listening: http://localhost:8080`);
});
