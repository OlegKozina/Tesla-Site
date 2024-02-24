$(document).ready(function(){
    $('.menu1 >li a').click(function(e){

        $('.tesla-title img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        $('.tesla-title h1').text($(this).text());

        e.preventDefault();
    })



})