const darkModeIcon = document.getElementById("dark-mode-icon");
const themes = ["light", "dark", "third"];

(() => {
  var currTheme = localStorage.getItem("theme");
  if (!themes.includes(currTheme)) {
    currTheme = themes[0];
  }
  document.documentElement.setAttribute("data-theme", currTheme);
  toggleDarkModeIcon(currTheme);
})();

function toggleDarkMode() {
  let targetTheme =
    themes[
      (themes.indexOf(document.documentElement.getAttribute("data-theme")) +
        1) %
        themes.length
    ];
  console.log(targetTheme);
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
  toggleDarkModeIcon(targetTheme);
}

function toggleDarkModeIcon(newTheme) {
  if (newTheme == "dark") {
    darkModeIcon.classList.add("fa-sun");
    darkModeIcon.classList.remove("fa-moon");
  } else if (newTheme == "light") {
    darkModeIcon.classList.add("fa-moon");
    darkModeIcon.classList.remove("fa-sun");
  }
}
