const darkModeIcon = document.getElementById("dark-mode-icon");
const themes = ["plum", "sepia", "aquarium", "midnight"];
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
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
  toggleDarkModeIcon(targetTheme);
  toggleMii(targetTheme);
}

function toggleDarkModeIcon(newTheme) {
  let ind = themes.indexOf(newTheme);
  if (ind % 2 != 0) {
    // if odd, theme is dark mode
    darkModeIcon.classList.add("fa-sun");
    darkModeIcon.classList.remove("fa-moon");
  } else {
    darkModeIcon.classList.add("fa-moon");
    darkModeIcon.classList.remove("fa-sun");
  }
}

function toggleMii(newTheme) {
  if (mii != null) {
    let ind = themes.indexOf(newTheme);
    switch (ind) {
      case 0:
        mii.src = "/assets/img/mii.png";
        break;
      case 1:
        mii.src = "/assets/img/mii_sepia.webp";
        break;
      case 2:
        mii.src = "/assets/img/mii_aquarium.webp";
        break;
      case 3:
        mii.src = "/assets/img/mii_midnight.webp";
        break;
      // case 4:
      //   mii.src = "/assets/img/mii_strawberry.webp";
      //   break;
      // case 1:
      //   mii.src = "/assets/img/mii_codec.webp";
      //   break;
    }
  }
}
