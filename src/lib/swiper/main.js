var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {

    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button.next',
        prevEl: '.swiper-button.prev',
    },
});
