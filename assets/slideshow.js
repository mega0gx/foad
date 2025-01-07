let slideIndex = 1;
let slideTimer;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    
    // Show current slide
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");
    
    // Reset timer
    clearTimeout(slideTimer);
    slideTimer = setTimeout(() => changeSlide(1), 5000);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Initialize slideshow when content loads
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
}); 