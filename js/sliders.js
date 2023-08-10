const swiper1 = new Swiper('.swiper-4', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});

const swiper2 = new Swiper('.swiper-options', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 60,
    }
  }
});

const swiper3 = new Swiper('.swiper-3', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

var swiper4 = new Swiper(".swiper-thumbs", {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    992: {
      direction: 'vertical',
    },
  }
});
var swiper5 = new Swiper(".swiper-main", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper4,
  },
});

const swiper6 = new Swiper('.swiper-5', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 15,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  }
});

const swiper7 = new Swiper('.swiper-1', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: false,
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper8 = new Swiper('.swiper-free', {
  loop: false,
  freeMode: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      spaceBetween: 15,
    },
    768: {
      spaceBetween: 20,
    },
    992: {
      spaceBetween: 25,
    },
    1200: {
      spaceBetween: 30,
    }
  }
});

const swiper9 = new Swiper('.swiper-specifications', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: false,
  pagination: false,
  rewind: true,
  grabCursor: false,
  simulateTouch: false,
  allowTouchMove: false
});
const swiper10 = new Swiper('.swiper-compare', {
  slidesPerView: 1,
  spaceBetween: 20,
  rewind: true,
  controller: {
    control: swiper9,
    by: 'slide',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              ' из ' +
              '<span class="' + totalClass + '"></span>';
  }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper11 = new Swiper('.swiper-specifications-2', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: false,
  pagination: false,
  rewind: true,
  grabCursor: false,
  simulateTouch: false,
  allowTouchMove: false
});
const swiper12 = new Swiper('.swiper-compare-2', {
  slidesPerView: 1,
  spaceBetween: 20,
  rewind: true,
  controller: {
    control: swiper11,
    by: 'slide',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper13 = new Swiper('.swiper-specifications-3', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: false,
  pagination: false,
  rewind: true,
  grabCursor: false,
  simulateTouch: false,
  allowTouchMove: false
});
const swiper14 = new Swiper('.swiper-compare-3', {
  slidesPerView: 1,
  spaceBetween: 20,
  rewind: true,
  controller: {
    control: swiper13,
    by: 'slide',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper15 = new Swiper('.swiper-specifications-4', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: false,
  pagination: false,
  rewind: true,
  grabCursor: false,
  simulateTouch: false,
  allowTouchMove: false
});
const swiper16 = new Swiper('.swiper-compare-4', {
  slidesPerView: 1,
  spaceBetween: 20,
  rewind: true,
  controller: {
    control: swiper15,
    by: 'slide',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper17 = new Swiper('.swiper-projects', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: false,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper18 = new Swiper(".swiper-galleryThumbs", {
  direction: 'horizontal',
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
});
var swiper19 = new Swiper(".swiper-gallery", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper18,
  },
});