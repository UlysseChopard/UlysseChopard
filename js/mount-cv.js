import { capitalize, el } from "./utils.js";

const DESCRIPTION = "description";
const HIDDEN_ITEMS = [DESCRIPTION];

const createItemInfo = (className, textContent) =>
  el("span", { className, textContent });

const createItemSummary = (item) => {
  const wrapper = el("p", "summary");
  Object.entries(item).forEach(([type, text]) => {
    if (HIDDEN_ITEMS.includes(type)) return;
    wrapper.appendChild(createItemInfo(type, text));
  });
  return wrapper;
};

const createItemDescription = (description) =>
  el("p", {
    className: "description",
    textContent: description,
  });

const createItem = (item) => {
  const wrapper = el("div", "item");
  wrapper.appendChild(createItemSummary(item));
  const description = item[DESCRIPTION];
  if (description) {
    wrapper.appendChild(createItemDescription(description));
  }
  return wrapper;
};

const createSection = (name, items) => {
  const wrapper = el("section", name);
  items.forEach((item) => {
    wrapper.appendChild(createItem(item));
  });
  return wrapper;
};

const createTitle = (title, rank = 2) =>
  el(`h${rank}`, { className: title, textContent: capitalize(title) });

const createTitledSection = (section, items) => {
  const wrapper = document.createElement("div", section);
  wrapper.appendChild(createTitle(section));
  wrapper.appendChild(createSection(section, items));
  return wrapper;
};

const mountCV = (data, id) => {
  const cv = document.getElementById(id);
  Object.entries(data).forEach(([section, items]) =>
    cv.appendChild(createTitledSection(section, items))
  );
};

export default mountCV;
