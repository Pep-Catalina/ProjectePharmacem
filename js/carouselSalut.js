/* Una array (tren) agafa las fotos que s'enenyen en el carrousel. El segon array conte la informacio alternatiba de las fotos. Cuan fas una array tot a de ser del mateix format */
let imgArrRoute = ["../img/Salut1.png", "../img/Salut2.png", "../img/Salut3.png"];
let imgArrAlt = ["Un metge content", "Mapa conceptual del cervell", "Nen a la revisio optica"];

let slideIndex = 0;
/* Aqiesta funcio crida cuan se li dona click en els botons per cambiar la foto, pot ser positio o negatiu. Despres crida a la funcio showSlides per mostrar la diapositiva actualitzada */
function plusSlides(number) {
    slideIndex = slideIndex + number;
    showSlides(slideIndex);
}
/* Aquesta funcio crida cuan se li dona click al control que et porta directament a una diapositiva especifica(botons d'asota), despres crida a showSlides per mostrar aquella diapositiva */
function currentSlide(number) {
    slideIndex = number;
    showSlides(slideIndex);
}
/* Aquesta funcio actualitza la imatge i el seu Alt. COmproba si numbrer esta fora dels limits del array de la imatja ajusta slideIndex en consecuencia
despres actualitza el seu atribut "src" i "alt" del element amb l'id de carousellmg amb la ruta i despricio de la diapositiva actual */
function showSlides(number) {

  let actualSlide = document.getElementById("carouselImg");

  if (number > imgArrRoute.length-1) {
    slideIndex = 0
  }

  if (number < 0) {
    slideIndex = imgArrRoute.length-1;
  }

  actualSlide.setAttribute("src", imgArrRoute[slideIndex]);
  actualSlide.setAttribute("alt", imgArrAlt[slideIndex]);
}