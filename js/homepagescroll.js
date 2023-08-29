document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".inner-section");
    const sectionDots = document.querySelectorAll(".section-dot");
    let currentSectionIndex = 0;
    const scrollableContainer = document.querySelector(".scrollable-section");

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });

        // Scroll to the active section
        const activeSection = sections[index];
        scrollableContainer.scrollTop = activeSection.offsetTop;

        // Update active dot
        sectionDots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    sectionDots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showSection(index);
            currentSectionIndex = index;
        });
    });

    function rotateSections() {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        showSection(currentSectionIndex);
    }

    setInterval(rotateSections, 10000); // Rotate every 10 seconds

    scrollableContainer.addEventListener("scroll", function () {
        const scrollY = scrollableContainer.scrollTop;
        const containerHeight = scrollableContainer.clientHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                currentSectionIndex = index;
            }
        });

        showSection(currentSectionIndex);
    });

    showSection(currentSectionIndex);
});

