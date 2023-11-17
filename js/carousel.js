let imgArrRoute = ["../img/Salut1.png", "../img/Salut2.png", "../img/Salut3.png"];
let imgArrAlt = ["Un metge content", "Mapa conceptual del cervell", "Nen a la revisio optica"];
let actualSlide = document.getElementById("carouselImg");

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(number) {
    slideIndex = slideIndex + number;
    console.log("plusSlides: " + slideIndex); 
    showSlides(slideIndex);
}

function currentSlide(number) {
    slideIndex = number;
    console.log("currentSlide: " + slideIndex); 
    showSlides(slideIndex);
}

function showSlides(number) {

  actualSlide = document.getElementById("carouselImg");

  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");

  if (number > slides.length) {
    slideIndex = 0
  }

  if (number < 1) {
    slideIndex = slides.length;
    console.log(slideIndex);
  }

  console.log(actualSlide);

  actualSlide.setAttribute("src", imgArrRoute[slideIndex]);
  actualSlide.setAttribute("alt", imgArrAlt[slideIndex]);
  
  
  console.log(slideIndex); 


  /*for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";*/
  
}