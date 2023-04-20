
const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  slidesPerGroup: 1,

  spaceBetween: 10,
  direction: 'horizontal',

  loop: false,
  speed: 2000,
  
  //centeredSlides: true,
  //slideToClickedSlide: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    //type: 'fraction',
    type: 'bullets',
    
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    340: {
      slidesPerView: 1,
      //spaceBetween: 20,
      slidesPerGroup: 1,
      speed: 800,

    },

    600: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
      speed: 800,

    },

    736: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      speed: 1200,
    },
    // when window width is >= 640px
    
    1040: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      speed: 1200,
    }, 

    1850: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 50,
      speed: 1200,
    } 


  }



  })

/*
  autoplay: {
    delay: 5000,
    },*/

  // Optional parameters
  //direction: 'vertical',
  //loop: true,
 // speed: 1000,
 // speed: 1500,
  //effect: 'fade',

  /*// If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar'
  },

//   autoplay: {
 //     delay: 2500,
 // }
*/


