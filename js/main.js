//Adding selectors to the call request form window, opening and closing button of this window
const modal = document.querySelector(".backdrop");
const modalOpen = document.querySelectorAll(".order");
const modalClose = document.querySelector(".modal-close");
//Creating a function to toggle form window class for opening and closing of the window
const toggleModal = () => modal.classList.toggle("is-hidden");
//Adding the previous function on click event for window opening and closing buttons
modalOpen.forEach((el) => {
  el.addEventListener("click", toggleModal);
});

modalClose.addEventListener("click", toggleModal);
