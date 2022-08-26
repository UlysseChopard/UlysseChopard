const { readdir, writeFile } = require("fs/promises");
const { join, basename } = require("path");

readdir(__dirname).then((files) => {
  const db = {};
  files.forEach((file) => {
    if (file === basename(__filename) || file === "db.json") return;
    const filePath = join(__dirname, file);
    db[basename(file, ".json")] = require(filePath);
    console.log("loaded:", filePath);
  });
  writeFile(join(__dirname, "/db.json"), JSON.stringify(db), console.error);
});
