const path = require("path");
const express = require("express");
const app = express();
const PORT = 80;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static(__dirname));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
