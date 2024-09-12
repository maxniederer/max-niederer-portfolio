const darkModeIcon = document.getElementById("dark-mode-icon");

(() => {
  var currTheme = localStorage.getItem("theme");
  if (currTheme != "dark" && currTheme != "light") {
    currTheme = "light";
  }
  document.documentElement.setAttribute("data-theme", currTheme);
  toggleDarkModeIcon(currTheme);
})();

function toggleDarkMode() {
  let targetTheme =
    document.documentElement.getAttribute("data-theme") == "dark"
      ? "light"
      : "dark";
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
