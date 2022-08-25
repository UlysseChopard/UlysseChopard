import { capitalize, el } from "./utils.js";

const DESCRIPTION = "description";
const HIDDEN_ITEMS = [DESCRIPTION];

const ItemInfo = (className, textContent) =>
  el("span", { className, textContent });

const ItemSummary = (item) => {
  const wrapper = el("p", "summary");
  Object.entries(item).forEach(([type, text]) => {
    if (HIDDEN_ITEMS.includes(type)) return;
    wrapper.appendChild(ItemInfo(type, text + " "));
  });
  return wrapper;
};

const ItemDescription = (description) =>
  el("p", {
    className: "description",
    textContent: description,
  });

const Item = (item) => {
  const wrapper = el("div", "item");
  wrapper.appendChild(ItemSummary(item));
  const description = item[DESCRIPTION];
  if (description) {
    wrapper.appendChild(ItemDescription(description));
  }
  return wrapper;
};

const Section = (name, items) => {
  const wrapper = el("section", name);
  items.forEach((item) => {
    wrapper.appendChild(Item(item));
  });
  return wrapper;
};

const Title = (title, rank = 2) =>
  el(`h${rank}`, { className: title, textContent: capitalize(title) });

const TitledSection = (section, items) => {
  const wrapper = el("div", section);
  wrapper.appendChild(Title(section));
  wrapper.appendChild(Section(section, items));
  return wrapper;
};

const CV = (data) => {
  const cv = el("main", "cv");
  Object.entries(data).forEach(([section, items]) =>
    cv.appendChild(TitledSection(section, items))
  );
  return cv;
};

export default CV;
