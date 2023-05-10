// Permet d'utiliser le bouton pour faire apparaitre le menu.
const boutonMenu = document.getElementById("bouton_menu");
const menu = document.querySelector(".menu");

boutonMenu.addEventListener("click", function() {
  menu.classList.toggle("affiche-menu");
});