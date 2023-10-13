
// PARALLAX NUAGES

document.addEventListener("DOMContentLoaded", function() {
    console.log("Le DOM est chargé.");
  
    // Ciblez le petit nuage
    const littleCloud = document.querySelector('.little-cloud');
  
    // Vérifiez si l'élément littleCloud a été trouvé
    if (littleCloud) {
        console.log("L'élément littleCloud a été trouvé.");
        window.addEventListener("scroll", function() {
            const scrollY = window.scrollY;
            let littleCloudOffset = scrollY * 0.1; // Utilisez le signe positif pour déplacer vers la droite
            littleCloudOffset = Math.min(littleCloudOffset, 300); // Limitez le déplacement à 300 pixels maximum
            littleCloud.style.transform = `translateX(${littleCloudOffset}px)`; // Modifiez "translateX" pour le défilement de gauche à droite
        });
    } else {
        console.log("L'élément littleCloud n'a pas été trouvé.");
    }
  
    // Ciblez le grand nuage
    const bigCloud = document.querySelector('.big-cloud');
  
    // Vérifiez si l'élément bigCloud a été trouvé
    if (bigCloud) {
        console.log("L'élément bigCloud a été trouvé.");
        window.addEventListener("scroll", function() {
            const scrollY = window.scrollY;
            let bigCloudOffset = scrollY * 0.1; // Utilisez le signe positif pour déplacer vers la droite
            bigCloudOffset = Math.min(bigCloudOffset, 300); // Limitez le déplacement à 300 pixels maximum
            bigCloud.style.transform = `translateX(${bigCloudOffset}px)`; // Modifiez "translateX" pour le défilement de gauche à droite
        });
    } else {
        console.log("L'élément bigCloud n'a pas été trouvé.");
    }
  });
  
  
  
  
  
  
   
  
  
  
  