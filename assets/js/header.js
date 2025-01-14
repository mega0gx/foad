document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            navLinks.classList.add('open');
            document.body.style.overflow = 'hidden';
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
            menuOpen = false;
        }
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
            menuOpen = false;
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        // If scrolling down, hide the navbar
        if (currentScrollY > lastScrollY) {
            header.classList.remove("visible");
            header.classList.add("hidden");
        }
        // If scrolling up, show the navbar
        else {
            header.classList.remove("hidden");
            header.classList.add("visible");
        }

        // Update the last scroll position
        lastScrollY = currentScrollY;
    });
});