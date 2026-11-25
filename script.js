const root = document.documentElement;
const btn = document.getElementById("mode-change-btn");

let isDark = false;

btn.addEventListener("click", () => {
  isDark = !isDark;

  root.style.setProperty("--BackgroundColor", isDark ? "#000000" : "#ffffff");

  root.style.setProperty("--FontColor", isDark ? "#ffffff" : "#000000");
});
