'use strict'

// navbar toggle

const overlay = document.querySelector('[data-overlay]');
const navbar = document.querySelector('[data-navbar]');
const navbarToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navLink = document.querySelectorAll('[data-nav-link]');

const navToggleFunc = function(){
    navbarToggleBtn.classList.toggle('active')
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
}
navbarToggleBtn.addEventListener('click', navToggleFunc);
overlay.addEventListener('click', navToggleFunc);

for(let i = 0; i <navLink.length; i++){
    navLink[i].addEventListener('click',navToggleFunc )
}

//HEADER ACTIVE ON SCROLL

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', function(){
    window.scrollY >= 10? header.classList.add('active'): header.classList.remove('active')
})