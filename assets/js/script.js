document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".heroslider", {
      loop: true,  // Infinite loop
      autoplay: {
        delay: 3000,  // Slide change every 3 seconds
        disableOnInteraction: false,  // Continue autoplay even if user interacts
      },
      speed: 800,  // Smooth transition speed
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
    });
  });

  var whatwedoslide = new Swiper(".whatwesdoslider", {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 25,       // Adds a gentle tilt to the slides
      stretch: 0,       // No extra stretch between slides
      depth: 150,       // Reduced depth for a less dramatic 3D effect
      modifier: 1,
      slideShadows: true,  // Enable slide shadows for better depth perception
    },
    slideToClickedSlide: true,
    slidesPerView: 1.2,
    centeredSlides: true,
    centeredSlidesBounds: true,
    keyboard: {
      enabled: true,
    },
    loop: true,
    navigation: {
      nextEl: ".whatwenext",
      prevEl: ".whatweprev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 2.2,
      },
      1366: {
        slidesPerView: 3.5,
      },
      1920: {
        slidesPerView: 3.5,
      },
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
  });
  

  
 
var achiveslide = new Swiper(".achive-slider", {
    // slidesPerView: 1.2,
    effect: "slide",
    
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".achivenext",
      prevEl: ".achiveprev",
    },
    slidesPerView: 1.2,
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 34,
      },
    },
    autoplay: {
      delay: 4000,
  
      pauseOnMouseEnter: true,
    },
  });

  
var swiper2 = new Swiper(".impactslider", {
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    slideToClickedSlide: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".impactnext",
      prevEl: ".impactprev",
    },
    centeredSlides: true,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1366: {
        slidesPerView: 2.65,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 4000,
    },
  });
  function isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  
swiper10 = new Swiper(".accswiper", {
    // Add Swiper options here
    slidesPerView: 1.2,
    
    loop: true,
    effect: "slide",
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 10,
    //   depth: 200,
    //   modifier: 1,
    //   slideShadows: false,
    // },
    navigation: {
      nextEl: ".accreconext",
      prevEl: ".accrecoprev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 24,
        
        loop: true,
      },
    },
    autoplay: {
      delay: 3000,
    },
  });

  var swiper3 = new Swiper(".sewa-slider", {
    slidesPerView: 1.2,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 25,       // Adds a gentle tilt to the slides
        stretch: 0,       // No extra stretch between slides
        depth: 150,       // Reduced depth for a less dramatic 3D effect
        modifier: 1,
        slideShadows: true,  // Enable slide shadows for better depth perception
      },
    slideToClickedSlide: true,
    initialSlide: 3,
    centeredSlidesBounds: true,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".sewanext",
      prevEl: ".sewaprev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1366: {
            slidesPerView: 4.5,
          },
          1920: {
            slidesPerView: 4.5,
          },
    },
  });
  
  var swiper4 = new Swiper(".cow-slider", {
    slidesPerView: 1.2,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 25,       // Adds a gentle tilt to the slides
        stretch: 0,       // No extra stretch between slides
        depth: 150,       // Reduced depth for a less dramatic 3D effect
        modifier: 1,
        slideShadows: true,  // Enable slide shadows for better depth perception
      },
    slideToClickedSlide: true,
    centeredSlides: true,
    initialSlide: 3,
    navigation: {
      nextEl: ".adoptcwnext",
      prevEl: ".adoptcwprev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1366: {
            slidesPerView: 4.5,
          },
          1920: {
            slidesPerView: 4.5,
          },
    },
    autoplay: {
      delay: 60000,
    },
  });


  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".lap-menu .menu-item");
  
    menuItems.forEach((item) => {
      const submenu = item.querySelector(".lap-menu .submenu");
  
      if (submenu) {
        item.addEventListener("mouseenter", () => {
          submenu.classList.add("show");
          submenu.style.maxHeight = submenu.scrollHeight + "px"; // Dynamic height
          submenu.style.opacity = "1";
        });
  
        item.addEventListener("mouseleave", () => {
          submenu.classList.remove("show");
          submenu.style.maxHeight = "0";
          submenu.style.opacity = "0";
        });
      }
    });
  });
  

  var swiper7 = new Swiper(".test", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // navigation: {
    //   nextEl: ".testswiper-next",
    //   prevEl: ".testswiper-prev",
    // },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  