// Early Works Project 02 JavaScript
// Early Works Project 02 JavaScript

const themeToggle = document.querySelector(".site-header__theme-toggle");
const themeImages = document.querySelectorAll("[data-light-src][data-dark-src]");

function setTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("is-dark", isDark);
  document.body.classList.toggle("is-light", !isDark);

  themeImages.forEach((image) => {
    image.src = isDark ? image.dataset.darkSrc : image.dataset.lightSrc;
  });

  themeToggle.setAttribute("aria-pressed", isDark);
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );

  localStorage.setItem("theme", theme);
}

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startingTheme = savedTheme || (prefersDark ? "dark" : "light");

  setTheme(startingTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("is-dark") ? "light" : "dark";

    setTheme(nextTheme);
  });
}