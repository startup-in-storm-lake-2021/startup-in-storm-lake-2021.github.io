
var slideIndex = {};

// Next/previous controls
function plusSlides(slideID, n) {
  showSlides(slideID, slideIndex[slideID] += n);
}

// Thumbnail image controls
function currentSlide(slideID, n) {
  showSlides(slideID, slideIndex[slideID] = n);
}

function showSlides(slideID, n) {
  var i;
  var slides = document.getElementsByClassName(slideID);
  var dots = document.getElementsByClassName(slideID+"-dots");
  if (n > slides.length) {slideIndex[slideID] = 1}
  if (n < 1) {slideIndex[slideID] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[slideID]-1].style.display = "block";
  dots[slideIndex[slideID]-1].className += " active";
}
