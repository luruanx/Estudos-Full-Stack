
/* HEADER / NAV */

var header = document.getElementById('header');
var navigationheader = document.getElementById('navigation-header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navigationheader.style.marginLeft = '-10vw';
        navigationheader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else
    {
        navigationheader.style.marginLeft = '-100vw';
        navigationheader.style.animationName = '';
        content.style.filter = '';
    }
}

function closedSidebar()
{
    if(showSidebar)
    {
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar)
    {
        toggleSidebar();
    }
})

/* SLIDER ARTICLE */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-box");
    if (n > slides.length) { slideIndex = 1 }
    if ( n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}
