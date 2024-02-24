const mobileMenu = document.querySelector('.mobile-menu');
const mobileOpen = document.querySelector('.menu_button');
const mobileClose = document.querySelector('.menu_close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

mobileOpen.addEventListener('click', toggleMenu);
mobileClose.addEventListener('click', toggleMenu);


$(document).ready(function(){
    $('.mobile-menu__nav >li a').click(function(e){

        $('.tesla-title img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        $('.tesla-title h1').text($(this).text());
        $('.main-title').text($(this).text());
        $('.footer-right h3').text($(this).text());
        $('.model-change').text($(this).text());

        e.preventDefault();
        $('.mobile-menu__nav >li a').css({'color': 'white'}, {'border-bottom': 'none'})
        $(this).css({'color': 'black'}, {'border-bottom': '2px solid white'})
    })



})