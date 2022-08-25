const RECORD_EVENT = "record";

export const capitalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const record = (key, value) => {
  const event = new Event(RECORD_EVENT);
  event.key = key;
  event.value = value;
  window.dispatchEvent(event);
  localStorage.setItem(key, value);
};

export const onRecord = (cb) => window.addEventListener(RECORD_EVENT, cb);

export const el = (type, options) => {
  const newEl = document.createElement(type);
  switch (typeof options) {
    case "string":
      newEl.setAttribute("class", options);
      break;
    case "object":
      Object.entries(options).forEach(([attr, value]) => (newEl[attr] = value));
      break;
  }
  return newEl;
};

export const mount = (mountPoint, element) => {
  const app = document.getElementById(mountPoint);
  app.appendChild(element);
};

export const fetchJSON = (path) => fetch(path).then((res) => res.json());