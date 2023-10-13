// Créez une promesse pour charger Swiper JS
function loadSwiperJS() {
    return new Promise(function (resolve) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
      script.async = true;
      script.onload = resolve; // La promesse est résolue lorsque le script est chargé
  
      document.head.appendChild(script);
    });
  }
  
  // Créez une promesse pour charger Swiper CSS
  function loadSwiperCSS() {
    return new Promise(function (resolve) {
      const link = document.createElement('link');
      link.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
      link.rel = 'stylesheet';
      link.onload = resolve; // La promesse est résolue lorsque le CSS est chargé
  
      document.head.appendChild(link);
    });
  }
  
  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",   
    coverflowEffect: {
      slideShadows: false,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
  });

  
  
