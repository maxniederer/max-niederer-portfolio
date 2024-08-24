// immediately invoked function expression (IIFE) pattern
(function(){
  var currTheme = localStorage.getItem('theme');
  if (currTheme != 'dark' && currTheme != 'light') {
    currTheme = 'dark';
  }
  document.documentElement.setAttribute('data-theme', currTheme);
})();

function toggleDarkMode() {
  let targetTheme = document.documentElement.getAttribute('data-theme') == 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
}