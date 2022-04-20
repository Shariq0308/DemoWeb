let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}

window.onload=changeImg;

var i = 0; 			
var images = [];	
var time = 2000;	

images[0] = "/Pictures/Amenities1.jpg";
images[1] = "/Pictures/Amenities2.jpg";
images[2] = "/Pictures/Amenities3.jpg";
images[3] = "/Pictures/Amenities4.jpg";

function changeImg()
{
  document.slide.src = images[i];
  if(i < images.length - 1)
  {  
    i++; 
  } 
  else 
  {  
    i = 0;
  }
  
}
  
setTimeout("changeImg()", time);



