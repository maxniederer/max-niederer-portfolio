const darkModeIcon = document.getElementById("dark-mode-icon");
const themes = ["light", "dark", "third"];
const mii = document.getElementById("mii");

(() => {
  var currTheme = localStorage.getItem("theme");
  if (!themes.includes(currTheme)) {
    currTheme = themes[0];
  }
  document.documentElement.setAttribute("data-theme", currTheme);
  toggleDarkModeIcon(currTheme);
  toggleMii(currTheme);
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
  toggleMii(targetTheme);
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

function toggleMii(newTheme) {
  let ind = themes.indexOf(newTheme);
  switch (ind) {
    case 0:
      console.log("0");
      mii.src = "/assets/img/mii.png";
      break;
    case 1:
      console.log("1");
      mii.src = "/assets/img/mii.png";
      break;
    case 2:
      console.log("2");
      mii.src = "/assets/img/mii_third.png";
      break;
  }
}
