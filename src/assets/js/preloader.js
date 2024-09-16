// from https://codepen.io/kujara1/pen/dygbewv

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 300);
});
