// Memorizzazione degli elementi nelle variabili
const open_button = document.querySelector("i.fas.fa-bars");
const hamb_menu = document.querySelector("div.hamburger-menu");
const close_button = document.querySelector("i.fas.fa-times");

// Richiamo delle funzioni al click dei pulsanti
open_button.addEventListener("click", openMenu);
close_button.addEventListener("click", closeMenu);

// Funzioni
function openMenu() {
    hamb_menu.style.display = "block";
}
function closeMenu() {
    hamb_menu.style.display = "none";
}