document.addEventListener("DOMContentLoaded", function(){
    
    var swiperGallery1 = new Swiper(".swiperGallery1", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    var swiperGallery2 = new Swiper(".swiperGallery2", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });




    var swiperTrainer = new Swiper(".swiperTrainer", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
            }, 
        },
    });
      
})