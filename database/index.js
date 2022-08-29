const { readdirSync } = require("fs");
const { join, basename } = require("path");

const pathToJSON = (file = "") => join(__dirname, "/json", file);

module.exports = () => {
  const db = {};
  readdirSync(pathToJSON()).forEach((file) => {
    const filePath = pathToJSON(file);
    db[basename(file, ".json")] = require(filePath);
    console.log("loaded:", filePath);
  });
  return db;
};
