const modal = document.querySelector('.backdrop');
const modalOpen = document.querySelectorAll('.order');
const modalClose = document.querySelector('.modal-close');

const toggleModal = () => modal.classList.toggle('is-hidden');
modalOpen.forEach((el)=>{
    el.addEventListener('click', toggleModal);
})

modalClose.addEventListener('click', toggleModal);