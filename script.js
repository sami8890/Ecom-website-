// this is for mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileNavLinks = document.getElementById("mobile-nav-links");
    const body = document.body;
    const searchBar = document.getElementById("search-bar");
    const products = document.querySelectorAll(".category");

    // Toggle mobile menu visibility
    if (mobileMenuButton && mobileNavLinks) {
        mobileMenuButton.addEventListener("click", function () {
            mobileNavLinks.classList.toggle("hidden");
            mobileNavLinks.classList.toggle("flex");

            // Prevent background scrolling when mobile menu is open
            if (mobileNavLinks.classList.contains("flex")) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "auto";
            }
        });
    }

    // Smooth Scroll Implementation
    const mobileMenuLinks = mobileNavLinks.querySelectorAll('a');

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href'); // Get the href value
            
            // Check if targetId is valid
            if (targetId && targetId !== '#') {
                const targetSection = document.querySelector(targetId); // Select the target section
                
                // Smooth scroll to the target section
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }

            // Close the mobile menu
            mobileNavLinks.classList.add("hidden");
            mobileNavLinks.classList.remove("flex");
            body.style.overflow = "auto"; // Re-enable background scrolling
        });
    });

    // Search functionality
    if (searchBar && products) {
        searchBar.addEventListener("input", function () {
            const query = this.value.toLowerCase();
            products.forEach(product => {
                const title = product.querySelector("h3").textContent.toLowerCase();
                product.style.display = title.includes(query) ? "block" : "none";
            });
        });
    }

    // Countdown Timers for Sales Section
    function initializeCountdown(elementId, hours, minutes, seconds) {
        const countdownElement = document.getElementById(elementId);
        let timeLeft = hours * 3600 + minutes * 60 + seconds;

        const updateCountdown = () => {
            if (timeLeft <= 0) {
                countdownElement.textContent = "Sale ended!";
                return;
            }

            const hoursLeft = Math.floor(timeLeft / 3600);
            const minutesLeft = Math.floor((timeLeft % 3600) / 60);
            const secondsLeft = timeLeft % 60;

            countdownElement.textContent = `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
            timeLeft--;
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // Initialize countdowns with custom time for each product
    initializeCountdown("countdown-timer-1", 5, 30, 0); // 5 hours 30 minutes
    initializeCountdown("countdown-timer-2", 3, 20, 0); // 3 hours 20 minutes
    initializeCountdown("countdown-timer-3", 12, 50, 0); // 12 hours 50 minutes
    initializeCountdown("countdown-timer-4", 7, 10, 0); // 7 hours 10 minutes
    initializeCountdown("countdown-timer-5", 2, 5, 0); // 2 hours 5 minutes
    initializeCountdown("countdown-timer-6", 8, 45, 0); // 8 hours 45 minutes
});



