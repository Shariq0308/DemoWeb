
const navslide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // toggle Nav        
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        document.getElementById("fontier-gallery").style.zIndex = getRectArea();
        document.getElementById("googleMap").style.zIndex = gMap();
        });
}
navslide();


function getRectArea() {
    width = document.getElementById("fontier-gallery").style.zIndex;
    if (width < 0 ) {
      return 1;
    }
    return -1;
  }

function gMap() {
    width = document.getElementById("googleMap").style.zIndex;
    if (width < 0 ) {
      return 1;
    }
    return -1;
  }   
  
