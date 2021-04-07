const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];
// prev.onclick = plusSlides(-1);
prev.addEventListener('click', function () { plusSlides(-1) }, false);
next.addEventListener('click', function () { plusSlides(1) }, false);

var slideIndex = 1;
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
    var i;
    var slides = document.getElementsByClassName("slideshow-container-item");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}