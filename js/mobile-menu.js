//Adding selectors to mobile menu modal window, mobile menu opening button and mobile menu closing button
const mobileMenu = document.querySelector(".mobile-menu");
const mobileOpen = document.querySelector(".menu_button");
const mobileClose = document.querySelectorAll(".menu_close");
//Creating a function to toggle mobile menu class for opening and closing of modal window
const toggleMenu = () => mobileMenu.classList.toggle("is-open");
//Adding the previous function on click event for modal opening and closing buttons
mobileOpen.addEventListener("click", toggleMenu);
mobileClose.forEach((el) => el.addEventListener("click", toggleMenu));
//changing car pictures according to the chosen car model from the navigation
$(document).ready(function () {
  $(".mobile-menu__nav >li a").click(function (e) {
    $(".tesla-title img").hide().attr("src", $(this).attr("href")).fadeIn(1000);
    $(".tesla-title h1").text($(this).text());
    $(".main-title").text($(this).text());
    $(".footer-right h3").text($(this).text());
    $(".model-change").text($(this).text());

    e.preventDefault();
    $(".mobile-menu__nav >li a").css(
      { color: "white" },
      { "border-bottom": "none" }
    );
    $(this).css({ color: "black" }, { "border-bottom": "2px solid white" });
  });
});
