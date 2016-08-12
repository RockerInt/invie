// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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

var $btnMenu = document.getElementById("btnMenu");
var $navMenu = document.getElementById("navMenu");

var btnMenu_Click = function () {
    $navMenu.classList.toggle("active");
    $btnMenu.classList.toggle("icon-close");
}

$btnMenu.addEventListener("click",btnMenu_Click);
$btnMenu.addEventListener("touchstart",btnMenu_Click);
