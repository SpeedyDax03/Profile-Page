// Menu Toggle
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

// Active Menu Links
const navLink = document.querySelectorAll('.nav_link');
const nav = document.getElementById('nav-menu');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    nav.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Enhanced Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false, // Changed to false for better UX
    delay: 200
});

// Home Section
sr.reveal('.home_title, .home_img, .button', { interval: 100 });

// About Section
sr.reveal('.about_img, .about_subtitle, .about_text', { interval: 150 });

// Skills Section
sr.reveal('.skills_subtitle, .skills_text, .skills_data, .skills_img', { interval: 150 });

// Work Section
sr.reveal('.work_img', { interval: 150, origin: 'bottom' });

// Contact Section
sr.reveal('.contact_input, .contact_button', { interval: 150 });