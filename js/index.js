const btnMenu = document.querySelector('#menu')
const navbarLinks = document.querySelector('#navbarLinks')

btnMenu.addEventListener('click', () => {
  navbarLinks.classList.toggle('is-active')
})

// Slider

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// Slider Nosotros

const swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination2',
  },
})
