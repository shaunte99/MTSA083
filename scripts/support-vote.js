document.addEventListener("DOMContentLoaded", function () {
    // Typewriter effect for the header
    let titleText = "Poppie Smit | Your Inspiration";
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
