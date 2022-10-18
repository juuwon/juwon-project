$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade'
    });
  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      // when window width is >= 320px
      700: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      // when window width is >= 480px
       800: {
        slidesPerView: 4,
        spaceBetween: 50
      },
      // when window width is >= 640px
      1300: {
        slidesPerView: 2.5,
        spaceBetween: 10
      }
    }
    
  });