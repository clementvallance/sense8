var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {

    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button.next',
        prevEl: '.swiper-button.prev',
    },
    breakpoints: {
    720: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  }
});
