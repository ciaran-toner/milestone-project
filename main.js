$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".navbar-custom").addClass("active-navbar");
        } else {
           $(".navbar-custom").removeClass("active-navbar");
        }
    });
});



(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());
  
// typewriiter
//   var typeWritterh1 = document.getElementById('typeWritter');
// typeWritterh1.addEventListener('AnimationEnd',function( event ) { typeWritterh1.style.display = 'none'; }, false);