document.addEventListener("DOMContentLoaded", function () {
    // Animations for images when they come into view
    const galleryItems = document.querySelectorAll('.gallery-item');

    function checkVisibility() {
        galleryItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Call on load to show already-visible items

    // Typewriter effect for the header
    let titleText = "Poppie’s Charities";
    let index = 0;
    function typeEffect() {
        if (index < titleText.length) {
            document.querySelector(".typewriter").textContent += titleText.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    document.querySelector(".typewriter").textContent = "";
    typeEffect();
});
