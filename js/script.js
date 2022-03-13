// Using strict mode
"use strict";

// Selecting elements
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const active = document.querySelector(".active");

// Deactivate the active class before using the button
btnMenu.classList.remove("active");

// Show menu button click event
btnMenu.addEventListener("click", function () {
  menu.classList.remove("hidden");
  overlay.classList.remove("hidden");
  btnMenu.classList.add("active");
});

// Close menu button click event
overlay.addEventListener("click", function () {
  menu.classList.add("hidden");
  overlay.classList.add("hidden");
  btnMenu.classList.remove("active");
  active.style.transition = "0.5s";
});
