import { setItem } from "./localStorage.js";
import { CV_KEY, DATA_FILE, SET_ITEM_EVENT } from "./config.js";
import { createCV } from "./createCV.js";

const getCVData = () =>
  fetch(DATA_FILE).then((res) =>
    res.ok ? res.json() : new Error("imposssible de charger la donnée")
  );

const fillCV = (e) => {
  const newData = JSON.parse(e.value);
  createCV(newData);
};

window.addEventListener(SET_ITEM_EVENT, fillCV);

getCVData().then((data) => {
  setItem(CV_KEY, JSON.stringify(data), SET_ITEM_EVENT);
});
