$(document).ready(function(){
    $('.menu1 >li a').click(function(e){

        $('.tesla-title img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        $('.tesla-title h1').text($(this).text());
        $('.main-title').text($(this).text());
        $('.footer-right h3').text($(this).text());
        $('.model-change').text($(this).text());

        e.preventDefault();
    })



})