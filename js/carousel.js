let imgArrRoute = ["../img/Salut1.png", "../img/Salut2.png", "../img/Salut3.png"];
let imgArrAlt = ["Un metge content", "Mapa conceptual del cervell", "Nen a la revisio optica"];

let slideIndex = 0;

function plusSlides(number) {
    slideIndex = slideIndex + number;
    showSlides(slideIndex);
}

function currentSlide(number) {
    slideIndex = number;
    showSlides(slideIndex);
}

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