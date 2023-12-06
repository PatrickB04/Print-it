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
	}, // attention aux virgules
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>" // test pour voir si le nombre de points est bien en fonction du nombre d'entrées dans le tableau
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"  // test pour voir si le nombre de points est bien en fonction du nombre d'entrées dans le tableau
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>" // test pour voir si le nombre de points est bien en fonction du nombre d'entrées dans le tableau
	}

]

document.addEventListener('DOMContentLoaded', function() {
	const leftArrow = document.querySelector('.arrow_left');
	const rightArrow = document.querySelector('.arrow_right');
  
	leftArrow.addEventListener('click', function() {
	  console.log('Clic sur la flèche gauche');
	});
  
	rightArrow.addEventListener('click', function() {
	  console.log('Clic sur la flèche droite');
	});
  });

function ajouterPoints() {
	// Sélection de l'élément contenant les points
	var dotsContainer = document.querySelector("#banner .dots");
  
	// Test si l'élément existe
	if (dotsContainer) {
	  // Création des points en fonction du nombre de diapositives
	  for (var i = 0; i < slides.length; i++) {
		// Création d'un élément div
		var dot = document.createElement("div");
  
		// Ajout de la classe "dot" à l'élément div
		dot.classList.add("dot");
  
		// Ajout de l'élément contenant les points
		dotsContainer.appendChild(dot);
	  }
	}
}
  
  // Appel de la fonction pour générer les points
ajouterPoints();