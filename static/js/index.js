import { onRecord, record, mount, fetchJSON } from "./utils.js";
import CV from "./CV.js";

const DATA_FILE = "js/data.json";
const MOUNT_POINT = "app";
const STORAGE_KEY = "cv";

const fillCV = (e) => {
  const newData = JSON.parse(e.value);
  mount(MOUNT_POINT, CV(newData));
};

onRecord(fillCV);

fetchJSON(DATA_FILE).then((data) => {
  record(STORAGE_KEY, JSON.stringify(data));
});
