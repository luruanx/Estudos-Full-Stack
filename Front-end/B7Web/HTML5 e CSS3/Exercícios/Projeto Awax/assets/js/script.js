
/* HEADER / NAV */

var showNav = document.getElementById('menu-opener')
var navshow = document.getElementById('display-nav')
var closemenu = document.querySelectorAll('a')

showNav.addEventListener("click", () => {
    navshow.classList.toggle('navshow')
})