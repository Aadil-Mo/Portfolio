document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for all sections
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(fadeIn => {
        fadeIn.classList.add('fade-in');
    });

    // Project category tab functionality
    const categoryButtons = document.querySelectorAll('.category-button');
    const projectGrids = document.querySelectorAll('.projects-grid');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            // Deactivate all buttons and hide all grids
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            projectGrids.forEach(grid => grid.style.display = 'none';

            // Activate the clicked button and show the corresponding grid
            button.classList.add('active');
            const activeGrid = document.querySelector(`.projects-grid[data-category="${category}"]`);
            if (activeGrid) {
                activeGrid.style.display = 'grid'; // Or 'flex' if you change the grid to flex
            }
        });
    });

    // Show the initial category (HTML & CSS)
    const initialButton = document.querySelector('.category-button[data-category="html-css"]');
    if (initialButton) {
        initialButton.click();
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
