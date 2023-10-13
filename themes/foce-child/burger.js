//-------------------------- MENU BURGER ---------



  document.addEventListener("DOMContentLoaded", function () {
    const menuBurger = document.querySelector('.menu-burger');
    const overlay = document.querySelector('.overlay');
    const menuIcon = document.querySelector('.menu-icon');
  
    menuBurger.addEventListener('click', function () {
      // Basculez la classe "active" sur le menu burger
      menuBurger.classList.toggle('active');
      menuIcon.classList.toggle('active');
  
      if (menuBurger.classList.contains('active')) {
        // Ouvrir le menu
        overlay.style.display = 'block';
  
        // Forcer le navigateur à appliquer la transition immédiatement
        requestAnimationFrame(function () {
          overlay.style.opacity = '1';
        });
      } else {
        // Fermer le menu
        overlay.style.opacity = '0';
  
        // Masquer le menu après la transition
        setTimeout(function () {
          overlay.style.display = 'none';
        }, 300); 
      }
    });
  });
  