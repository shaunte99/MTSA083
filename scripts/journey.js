// Typewriter Effect for the Title
document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.querySelector(".typewriter");
    let text = typewriterElement.innerHTML;
    typewriterElement.innerHTML = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});

// Smooth Scroll to Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Show/Hide Scroll-to-Top Button based on Scroll Position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to Top Action
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger Menu for Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Automatic Image Gallery Slider (optional feature)
let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.image-gallery img');
const galleryNextButton = document.createElement('button');
galleryNextButton.innerHTML = 'Next';
galleryNextButton.classList.add('gallery-next');
document.body.appendChild(galleryNextButton);

function showNextImage() {
    galleryImages[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    galleryImages[currentImageIndex].style.display = 'block';
}

galleryNextButton.addEventListener('click', showNextImage);
showNextImage();  // Start showing the first image

// Add Dynamic Animations to Quotes
const blockquotes = document.querySelectorAll('blockquote p');
blockquotes.forEach(quote => {
    quote.style.opacity = 0;
    quote.style.transition = 'opacity 1s ease-in-out';
    quote.addEventListener('mouseover', () => {
        quote.style.opacity = 1;
    });
    quote.addEventListener('mouseout', () => {
        quote.style.opacity = 0.7;
    });
});
