const nodes = document.querySelectorAll("main > *");
const hideAllExcept = (nodes, id) => {
  nodes.forEach((el) => {
    if (!el.classList.length) {
      el.classList.add("block");
    }
    if (el.id === id) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
};

const event = new Event("hashchange");

window.addEventListener("DOMContentLoaded", () => {
  if (!location.hash) location.hash = "#cursus";
  window.dispatchEvent(event);
});

window.addEventListener("hashchange", () => {
  hideAllExcept(nodes, location.hash.slice(1));
});
