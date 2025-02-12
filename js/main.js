const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.header-menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-open');
})