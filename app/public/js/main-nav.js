const hideAllExcept = (className) => {
  document
    .querySelectorAll("main > *")
    .forEach((el) =>
      el.classList.contains(className)
        ? el.classList.remove("hidden")
        : el.classList.add("hidden")
    );
};

document.getElementById("main-nav").addEventListener("click", (e) => {
  const [, selectedSection] = e.target.id.match(/(.*)\-btn/);
  hideAllExcept(selectedSection);
});
