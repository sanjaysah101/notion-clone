const btnToggle = document.querySelector(".btn-toggle");

btnToggle.addEventListener("click", () => {
    const mobileNav = document.querySelector(".mobile-nav");
    const toggleIcons = document.querySelectorAll(".btn-toggle svg");

    mobileNav.classList.toggle("is-mobile-nav-open");
    toggleIcons.forEach(toggleIcon => {
        toggleIcon.classList.toggle("show-toggle-btn");
    })
});

const mobileNavSections = document.querySelectorAll(".mobile-nav-section .section-label");

mobileNavSections.forEach((mobileNavSection) => {
    mobileNavSection.addEventListener("click", () => {
        const mobileDrawer = mobileNavSection.nextElementSibling;
        mobileDrawer.classList.toggle("is-open");
        mobileNavSection.classList.toggle("rotate");
    });
});
