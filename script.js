let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slideshow img");
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500); 
}

