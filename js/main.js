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
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
    el: '.swiper-pagination',
    },
    breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        360: {
          slidesPerView: 1
          
        }
    },
});