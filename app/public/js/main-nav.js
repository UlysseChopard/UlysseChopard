const hideAll = () => {
  document
    .querySelectorAll("main > *")
    .forEach((el) => el && (el.style.display = "none"));
};

document.getElementById("main-nav").addEventListener("click", (e) => {
  hideAll();
  const [, selectedSection] = e.target.id.match(/(.*)\-btn/);
  document.getElementById(selectedSection).style.display = "block";
});
