const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');

burgerBtn.addEventListener('click', (e) => {
    burgerBtn.classList.toggle('header__burger_active');
    menu.classList.toggle('menu_active');
    header.classList.toggle('header_active');
    console.log('Success!')
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 44,
    allowSlideNext: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    slidesPerGroup: 1,
    allowTouchMove: true,
    touchRatio: 1.5,
    centeredSlides: false,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        // when window width is >= 480px
        696: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        986: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        // when window width is >= 640px
        1280: {
            slidesPerView: 4,
            spaceBetween: 44
        }
    }
    // And if we need scrollbar

});


const swiperSlider = document.querySelector('.swiper').swiper;
swiperSlider.allowSlideNext = true;

// Now you can use all slider methods like