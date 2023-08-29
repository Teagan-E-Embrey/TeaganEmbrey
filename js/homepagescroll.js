document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".inner-section");
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
    }

    function rotateSections() {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        showSection(currentSectionIndex);
    }

    setInterval(rotateSections, 10000); // Rotate every 10 seconds

    showSection(currentSectionIndex);
});