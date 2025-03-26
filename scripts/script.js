document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Smooth scroll effect
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const href = this.getAttribute("href");

            // Check if it's a link to a section or a different page
            if (href.startsWith("#")) {
                event.preventDefault();  // Prevent default if it's an anchor link

                const section = document.querySelector(href);
                section.scrollIntoView({ behavior: "smooth" });

                // Remove active class from all
                document.querySelectorAll(".nav-link").forEach(link => {
                    link.classList.remove("active");
                });

                // Add active class to the clicked link
                this.classList.add("active");

                // Close menu on mobile
                if (window.innerWidth < 768) {
                    navMenu.classList.remove("show");
                }
            } else {
                // Let the browser navigate to the page normally if it's not an anchor link
                // No need to prevent the default behavior here
            }
        });
    });

    // Typewriter effect for the header
    let titleText = "Miss Noordheuwel 2024 | Miss Krugersdorp 2025 | Miss Westrand 2025";
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
