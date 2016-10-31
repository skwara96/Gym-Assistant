$(document).ready(function(){
    $('.hamburger-icon').click(function(){
        $(this).toggleClass('active');
         $('.menu-list').toggleClass('active');
         $('.menu-title').toggleClass('active');
        //$('.menu-sidebar').toggleClass('active');
    });
});
