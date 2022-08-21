import { onRecord, record, recordEventListener } from "./utils.js";
import mountCV from "./cv.js";

const DATA_FILE = "js/data.json";
const CV_KEY = "cv";

const getCVData = () =>
  fetch(DATA_FILE).then((res) =>
    res.ok ? res.json() : new Error("imposssible de charger la donnée")
  );

const fillCV = (e) => {
  const newData = JSON.parse(e.value);
  mountCV(newData, CV_KEY);
};

onRecord(fillCV);

getCVData().then((data) => {
  record(CV_KEY, JSON.stringify(data));
});
