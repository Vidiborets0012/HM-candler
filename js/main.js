const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.header-menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-open');
})

const swiperOne = new Swiper('.feedback-slider', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
  }

});

const swiperTwo = new Swiper('.certificates-slider', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
  }

});