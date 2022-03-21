// Using strict mode
"use strict";

// Selecting elements
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const active = document.querySelector(".active");

// Deactivate the active class before using the button
btnMenu.classList.remove("active");

// Show menu function
const showMenu = function () {
  menu.classList.remove("hide");
  overlay.classList.remove("hide");
  btnMenu.classList.add("active");
}

// Close menu function
const closeMenu = function () {
  menu.classList.add("hide");
  overlay.classList.add("hide");
  btnMenu.classList.remove("active");
  active.style.transition = "0.5s";
}

// Show menu button click event
btnMenu.addEventListener("click", showMenu);

// Close menu button by overlay click event
overlay.addEventListener("click", closeMenu);