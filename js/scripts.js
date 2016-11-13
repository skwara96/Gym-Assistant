$(document).ready(function(){
    $('.hamburger-icon, .menu-title').click(function(){
         $('.menu-list, .menu-title, .hamburger-icon').toggleClass('active');
    });

    $('a').hover(function(){
         $(this).toggleClass('active');
    });

   $('.svg-inject').svgInject(function() {
                console.log('SVG inject complete')
            });
});
