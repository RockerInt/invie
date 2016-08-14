// Smooth Scrolling
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
// End Smooth Scrolling

var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);

var mQuery = false;
var btnMenu = document.getElementById("btnMenu");
var navMenu = document.getElementById("navMenu");
var $itemsMenu = $(".menu a");

var toggleMenu = function () {
    navMenu.classList.toggle("active");
    btnMenu.classList.toggle("icon-close");
}
var showMenu = function () {
    navMenu.classList.add("active");
    btnMenu.classList.add("icon-close");
}
var hideMenu = function () {
    navMenu.classList.remove("active");
    btnMenu.classList.remove("icon-close");
}

function mediaQuery() {
    if (consulta.matches && !mQuery) {
        mQuery = true;
        btnMenu.addEventListener("click", toggleMenu);
        //btnMenu.addEventListener("touchstart", btnMenu_Click);
        $itemsMenu.on("click", toggleMenu);//.on("touchstart", btnMenu_Click);
    }
}
mediaQuery();

// lazy loading
var bLazy = new Blazy({
    selector: 'img'
});
var gestos;
function swipeMenu($element) {
    gestos = new Hammer(document.body);

    gestos.on('swipeleft', hideMenu);
    gestos.on('swiperight', showMenu);
}