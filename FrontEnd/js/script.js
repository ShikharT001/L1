
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');
    const sections = document.querySelectorAll('.section');
    let currentVideo = '';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const videoSrc = entry.target.getAttribute('data-video');
                if (currentVideo !== videoSrc) {
                    currentVideo = videoSrc;
                    video.style.opacity = 0;
                    setTimeout(() => {
                        video.src = videoSrc;
                        video.style.opacity = 1;
                    }, 1000); // Match this to the transition duration in CSS
                }
            }
        });
    }, {
        threshold: 0.5 // Adjust as necessary to change earlier or later
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

/* Navbar Starts here*/

const menuBtn = document.getElementById('menuBtn');
const slideMenu = document.getElementById('slideMenu');

menuBtn.addEventListener('click', () => {
    slideMenu.classList.toggle('active');
});

slideMenu.addEventListener('click', (e) => {
    if (e.target === slideMenu) {
        slideMenu.classList.remove('active');
    }
});
