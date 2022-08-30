const mapper = {
  "software-skills-btn": "software-skills",
  "home-btn": "home",
};

const cv = document.getElementById("cv");
const softwareSkills = document.getElementById("software-skills");

document.getElementById("main-nav").addEventListener("click", (e) => {
  for (const [buttonId, sectionId] of Object.entries(mapper)) {
    if (buttonId === e.target.id) {
      console.log(buttonId);
      document.getElementById(sectionId).style.display = "block";
    } else {
      console.log(sectionId);
      document.getElementById(sectionId).style.display = "none";
    }
  }
});
