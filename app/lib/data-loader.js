const { join } = require("path");

const pathToJSON = (fileBaseName = "") =>
  join(__dirname, "/data", `${fileBaseName}.json`);

module.exports = (dataName) => require(pathToJSON(dataName));
