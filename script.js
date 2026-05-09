// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('black');
    } else {
        navbar.classList.remove('black');
    }
});

// Horizontal Scroll functionality for movie rows using mouse wheel
const rowPosters = document.querySelectorAll('.row-posters');

rowPosters.forEach(row => {
    row.addEventListener('wheel', (e) => {
        // Allow horizontal scroll with mouse wheel
        if (e.deltaY !== 0) {
            e.preventDefault();
            row.scrollLeft += e.deltaY;
        }
    });
});
