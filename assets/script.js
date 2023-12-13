const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0; // Variable pour suivre l'index actuel

document.addEventListener('DOMContentLoaded', function() {
	const leftArrow = document.querySelector('.arrow_left');
	const rightArrow = document.querySelector('.arrow_right');
  
	leftArrow.addEventListener('click', function() {
	  changeSlide(-1); // Passer à la diapositive précédente
	});
  
	rightArrow.addEventListener('click', function() {
		changeSlide(1); // Passer à la diapositive suivante
	});

	ajouterPoints(); // Appel initial pour créer les points
	updateDots(); // Appel initial pour mettre à jour les points lors du chargement de la page
	updateSlide(); // Appel initial pour mettre à jour l'image et le texte lors du chargement de la page
  });

  function changeSlide(direction) {
	currentIndex += direction;
	// Vérifier si currentIndex dépasse la dernière diapositive
	if (currentIndex >= slides.length) {
	  currentIndex = 0;
	}
	// Vérifier si currentIndex est inférieur à la première diapositive
	else if (currentIndex < 0) {
	  currentIndex = slides.length - 1;
	}
  
	updateDots(); // Mettre à jour le point actif
	updateSlide(); // Mettre à jour l'image et le texte correspondants
  }

function updateSlide() {
	const bannerImg = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');

  
	if (bannerImg && tagLine) {
	  const currentSlide = slides[currentIndex];
	  const imagePath = `./assets/images/slideshow/${currentSlide.image}`;

	  bannerImg.src = imagePath; // Mettre à jour l'image
	  tagLine.innerHTML = currentSlide.tagLine; // Mettre à jour le texte
	}
  }
  

function ajouterPoints() {
	// Sélection de l'élément contenant les points
	let dotsContainer = document.querySelector("#banner .dots");
  
	// Test si l'élément existe
	if (dotsContainer) {
	  // Création des points en fonction du nombre de diapositives
	  for (let i = 0; i < slides.length; i++) {
		// Création d'un élément div
		let dot = document.createElement("div");
  
		// Ajout de la classe "dot" à l'élément div
		dot.classList.add("dot");
		
		// Ajout de l'élément contenant les points
		dotsContainer.appendChild(dot);
	  }
		// Appel initial pour mettre à jour les points lors du chargement de la page  
		updateDots();
	}
	}
  
function updateDots() {
    let dots = document.querySelectorAll("#banner .dots .dot");
  
    dots.forEach(function (dot, index) {
      if (index === currentIndex) {
        dot.classList.add("dot_selected");
      } else {
        dot.classList.remove("dot_selected");
      }
    });
  }