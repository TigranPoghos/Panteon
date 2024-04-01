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
            320: {
                slidesPerView: 1,
            }
        },
    });




    const burger__js = document.querySelector('.burger__js')
    const burger__jsBody = document.querySelector('.burger__jsBody')
    const header = document.querySelector('.header')
    burger__js.addEventListener('click', function(){
        burger__jsBody.classList.toggle('active')
        header.classList.toggle('active')
    })

    document.addEventListener('click', (e) => {
        const clickBody = e.composedPath().includes(burger__jsBody)
        const click = e.composedPath().includes(burger__js)
        const clickHeader = e.composedPath().includes(header)
    
        if (( !clickBody ) && (!click) && (!clickHeader))  {
            burger__jsBody.classList.remove('active')
            header.classList.remove('active')
        }
    })




    const burger__footer = document.querySelector('.burger__footer')
    const burger__footerBody = document.querySelector('.burger__footerBody')
    const footer__info = document.querySelector('.footer__info')
    burger__footer.addEventListener('click', function(){
        burger__footerBody.classList.toggle('active')
        footer__info.classList.toggle('active')
    })

    document.addEventListener('click', (e) => {
        const clickfooterBody = e.composedPath().includes(burger__footerBody)
        const clickfooter = e.composedPath().includes(burger__footer)
        const clickInfo = e.composedPath().includes(footer__info)
    
        if (( !clickfooterBody ) && (!clickfooter) && (!clickInfo))  {
            burger__footerBody.classList.remove('active')
            footer__info.classList.remove('active')
        }
    })
      
})