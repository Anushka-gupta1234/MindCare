document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add("show");
            }
        });
    }

    // Run on scroll and page load
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Make the NGO cards clickable
    document.querySelectorAll(".ngo-card").forEach(card => {
        card.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
});

// Search functionality
function filterNGOs() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".ngo-card");

    cards.forEach(card => {
        let name = card.querySelector("h2").innerText.toLowerCase();
        let tags = card.getAttribute("data-tags").toLowerCase();

        if (name.includes(input) || tags.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Clear search input
function clearSearch() {
    document.getElementById("searchInput").value = "";
    filterNGOs();
}
