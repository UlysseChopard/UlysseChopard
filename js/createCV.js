import { capitalize, CV_KEY, newEl } from "./utils.js";

const DESCRIPTION = "description";

const createItemSummary = (item) => {
  const wrapper = newEl("summary");
  wrapper.setAttribute("class", "item");
  for (const info of Object.keys(item)) {
    if (info === DESCRIPTION) continue;
    const span = newEl("span");
    span.setAttribute("class", info);
    span.textContent = item[info];
    wrapper.appendChild(span);
  }
  return wrapper;
};

const createItem = (item) => {
  const wrapper = newEl("details");
  wrapper.setAttribute("class", "item");
  wrapper.appendChild(createItemSummary(item));
  const description = item[DESCRIPTION];
  if (description) {
    wrapper.appendChild(document.createTextNode(description));
  }
  return wrapper;
};

const createSection = (name, items) => {
  const wrapper = newEl("section");
  wrapper.setAttribute("class", name);
  for (const item of items) {
    const itemElement = createItem(item);
    wrapper.appendChild(itemElement);
  }
  return wrapper;
};

const createTitle = (title, rank = 2) => {
  const element = newEl(`h${rank}`);
  element.setAttribute("class", title);
  element.textContent = capitalize(title);
  return element;
};

const createTitledSection = (section, items) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", section);
  wrapper.appendChild(createTitle(section));
  wrapper.appendChild(createSection(section, items));
  return wrapper;
};

export const createCV = (data) => {
  const cv = document.getElementById(CV_KEY);
  for (const [section, items] of Object.entries(data)) {
    cv.appendChild(createTitledSection(section, items));
  }
};
