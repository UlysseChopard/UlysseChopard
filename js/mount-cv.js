import { capitalize, el } from "./utils.js";

const HIDDEN_ITEMS = ["description"];

const createItemInfo = (info, text) => {
  if (HIDDEN_ITEMS.includes(info)) return;
  const span = el("span");
  span.setAttribute("class", info);
  span.textContent = text;
  return span;
};

const createItemSummary = (item) => {
  const wrapper = el("summary", "item");
  Object.entries(item).forEach(([info, text]) =>
    wrapper.appendChild(createItemInfo(info, text))
  );
  return wrapper;
};

const createItem = (item) => {
  const wrapper = el("details", "item");
  wrapper.appendChild(createItemSummary(item));
  const description = item[DESCRIPTION];
  if (description) {
    wrapper.appendChild(document.createTextNode(description));
  }
  return wrapper;
};

const createSection = (name, items) => {
  const wrapper = el("section", name);
  for (const item of items) {
    const itemElement = createItem(item);
    wrapper.appendChild(itemElement);
  }
  return wrapper;
};

const createTitle = (title, rank = 2) => {
  const element = el(`h${rank}`, title);
  element.textContent = capitalize(title);
  return element;
};

const createTitledSection = (section, items) => {
  const wrapper = document.createElement("div", section);
  wrapper.appendChild(createTitle(section));
  wrapper.appendChild(createSection(section, items));
  return wrapper;
};

const mountCV = (data, id) => {
  const cv = document.getElementById(id);
  for (const [section, items] of Object.entries(data)) {
    cv.appendChild(createTitledSection(section, items));
  }
};

export default mountCV;
