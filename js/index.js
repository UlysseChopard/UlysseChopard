import { record, recordEventListener, CV_KEY } from "./utils.js";
import { createCV } from "./createCV.js";

const DATA_FILE = "js/data.json";

const getCVData = () =>
  fetch(DATA_FILE).then((res) =>
    res.ok ? res.json() : new Error("imposssible de charger la donnée")
  );

const fillCV = (e) => {
  const newData = JSON.parse(e.value);
  createCV(newData);
};

recordEventListener(fillCV);

getCVData().then((data) => {
  record(CV_KEY, JSON.stringify(data));
});
