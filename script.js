let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides[currentSlide].classList.add('active');

    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
    changeSlide(1);
}, 3000);
