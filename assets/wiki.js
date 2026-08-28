
(function () {
  const savedTheme = localStorage.getItem("wiki-theme");
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  }

  const savedSidebar = localStorage.getItem("wiki-sidebar");
  if (savedSidebar === "hidden") {
    document.documentElement.dataset.sidebar = "hidden";
  } else if (savedSidebar === "visible") {
    document.documentElement.dataset.sidebar = "visible";
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  const isHidden = document.documentElement.dataset.sidebar === "hidden";
  const sidebar = document.getElementById("sidebar");
  const button = document.querySelector(".menu-button");
  if (sidebar) {
    sidebar.classList.toggle("hidden", isHidden);
  }
  if (button) {
    button.setAttribute("aria-expanded", String(!isHidden));
  }
});

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("wiki-theme", next);
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const button = document.querySelector(".menu-button");

  const isCurrentlyHidden = document.documentElement.dataset.sidebar === "hidden" || (sidebar && sidebar.classList.contains("hidden"));
  const nextState = isCurrentlyHidden ? "visible" : "hidden";

  document.documentElement.dataset.sidebar = nextState;
  if (sidebar) {
    sidebar.classList.toggle("hidden", nextState === "hidden");
  }
  if (button) {
    button.setAttribute("aria-expanded", String(nextState !== "hidden"));
  }
  localStorage.setItem("wiki-sidebar", nextState);
}
