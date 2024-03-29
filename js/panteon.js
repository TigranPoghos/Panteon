document.addEventListener("DOMContentLoaded", function(){
    
    var swiper = new Swiper(".mySwiper", {
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


      
})