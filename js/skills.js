// Using strict mode
"use strict";

// Selecting elements
const icons = document.querySelectorAll('.skills-i');
const htmlLayout = document.querySelector('.layout-1');
const cssLayout = document.querySelector('.layout-2');
const jsLayout = document.querySelector('.layout-3');
const gitLayout = document.querySelector('.layout-4');

// Selecting elements for the exit icons
const exitHtml = document.querySelector('.exit-html');
const exitCss = document.querySelector('.exit-css');
const exitJs = document.querySelector('.exit-js');
const exitGit = document.querySelector('.exit-git');

// Creating an array of the icon elements
const arrIcons = [...icons];

// Show overlay function when the user click on the icons
const showOverlay = function () {
  overlay.classList.remove('hide');
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  overlay.style.backdropFilter = 'blur(3px)';
}

// Show layout function
const showLayout = function () {
  const html = arrIcons[0].addEventListener('click', function() {
    htmlLayout.classList.remove('hidden');
    showOverlay();
  })
  
  const css = arrIcons[1].addEventListener('click', function() {
    cssLayout.classList.remove('hidden');
    showOverlay();
  })
  
  const js = arrIcons[2].addEventListener('click', function() {
    jsLayout.classList.remove('hidden');
    showOverlay();
  })
  
  const git = arrIcons[3].addEventListener('click', function() {
    gitLayout.classList.remove('hidden');
    showOverlay();
  })
}

// Calling the function
showLayout();

// Close layout function
const closeLayout = function () {
  htmlLayout.classList.add('hidden');
  cssLayout.classList.add('hidden');
  jsLayout.classList.add('hidden');
  gitLayout.classList.add('hidden');
  overlay.classList.add('hide');
  overlay.style.background = 'none';
  overlay.style.backdropFilter = 'none';
}

// Closing layout by clicking on the overlay
overlay.addEventListener('click', closeLayout);

// Closing layout by clicking on the exit icon
exitHtml.addEventListener('click', closeLayout);
exitCss.addEventListener('click', closeLayout);
exitJs.addEventListener('click', closeLayout);
exitGit.addEventListener('click', closeLayout);
