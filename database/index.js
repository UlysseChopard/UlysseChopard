const { readdirSync } = require("fs");
const { join, basename } = require("path");

module.exports = () => {
  const db = {};
  readdirSync(__dirname).forEach((file) => {
    if (file === basename(__filename)) return;
    const filePath = join(__dirname, file);
    db[basename(file, ".json")] = require(filePath);
    console.log("loaded:", filePath);
  });
  return db;
};
