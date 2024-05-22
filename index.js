var lastScrollTop = 0;
navbar = document.getElementById("header");
window.addEventListener("scroll", function(){
var scrollTop = window.pageYOffset || documnet
    .documentElement.scrollTop;
if(scrollTop > lastScrollTop){
    header.style.top="-80px";
}else{
    header.style.top="0";
}
lastScrollTop=scrollTop;
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");

    setTimeout(function () {
        slides[slideIndex - 1].classList.remove("fade");
    }, 1500);
}


// Gallery js

function loadImage(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
  
    lightbox.style.display = 'flex';
    lightboxImage.src = imageSrc;
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }
  