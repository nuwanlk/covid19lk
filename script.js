var menu = document.getElementById("menu");
var exit = document.getElementById("exit");
var nav = document.getElementById("nav");

menu.addEventListener("click", function(e) {
  nav.classList.toggle("hide-mobile");
  e.preventDefault();
});

exit.addEventListener("click", function(e) {
  nav.classList.toggle("hide-mobile");
  e.preventDefault();
});
