// Accessibility

// Toggle aria label
document.querySelectorAll(".toggle-aria").forEach((toggle) => {
  toggle.addEventListener("click", changeAria, false);
});

// Change color variables in root
function color(e) {
  document.documentElement.classList.toggle("light");
}

// Add class to body
function space(e) {
  document.querySelector("body").classList.toggle("dyslexic-mode");
}

// Change font family root variable
function font(e) {
  document.documentElement.classList.toggle("font");
}

function hover(e) {
  let hoverSection = document.querySelector("#hover");

  document
    .querySelectorAll(".face-content")
    .forEach((card) => card.classList.toggle("face-content-click"));

  hoverSection.classList.toggle("hover-content");
  hoverSection.classList.toggle("show-content");
}

function changeAria(e) {
  if (e.target.getAttribute("aria-checked") === "true") {
    e.target.setAttribute("aria-checked", "false");
  } else {
    e.target.setAttribute("aria-checked", "true");
  }
}
