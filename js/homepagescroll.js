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
        if (currentSectionIndex === 3) {
            currentSectionIndex = 0;
        }
        showSection(currentSectionIndex);
    }

    showSection(currentSectionIndex);
});
