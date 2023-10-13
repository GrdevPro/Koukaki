document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll("h2, h3");
  
    // Créez une fonction pour vérifier si un élément est dans la vue
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      return rect.top < windowHeight * 0.7;
    }
  
  
    // Ajoutez un écouteur de défilement pour gérer l'apparition au fur et à mesure
    window.addEventListener("scroll", function () {
      headings.forEach(function (heading) {
        if (isElementInViewport(heading) && !heading.classList.contains("visible")) {
          heading.classList.add("visible");
        }
      });
    }, { passive: true });
  });



  // TITLES EFFECTS
document.addEventListener("DOMContentLoaded", function () {
    const splitTextElements = document.querySelectorAll("h2, h3");
    // Ajoutez la classe "visible" aux éléments au chargement de la page
    
  
    // Créez une fonction pour afficher les mots un par un avec un délai
    function displayWords(words, index, element) {
      if (index < words.length) {
        const paragraph = document.createElement("p");
        paragraph.textContent = words[index];
        paragraph.classList.add("word");
  
        // Ajoutez le paragraphe à l'élément parent
        element.appendChild(paragraph);
  
        // Si ce n'est pas le dernier mot, ajoutez un espace
        if (index < words.length - 1) {
          const space = document.createTextNode(" ");
          element.appendChild(space);
        }
  
        // Affichez le mot suivant après un délai
        setTimeout(function () {
          paragraph.classList.add("show");
          displayWords(words, index + 1, element);
        }, 1000); // Délai d'une seconde entre chaque mot
      }
    }
  
    // Créez un observer pour déclencher l'animation lorsque les éléments entrent dans la vue
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const textElement = entry.target;
          const text = textElement.textContent;
          const words = text.split(" ");
  
          // Effacez le contenu de l'élément
          textElement.textContent = "";
  
          // Commencez l'affichage des mots
          displayWords(words, 0, textElement);
  
          // Une fois l'animation terminée, arrêtez d'observer cet élément
          observer.unobserve(textElement);
        }
      });
    });
  
    // Observez chaque élément de texte
    splitTextElements.forEach(function (element) {
      observer.observe(element);
    });
  });
  