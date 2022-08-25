const path = require("path");

const express = require("express");
const app = express();
const PORT = 80;

const { name, description, title } = require("./config.json");
const cursus = require("./cursus.json");
const informations = require("./informations.json");

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.use(express.static(__dirname));

app.get("/index.html", (_req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/", (_req, res) => {
  res.render("cv", { title, name, description, cursus, informations });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
