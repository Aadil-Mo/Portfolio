/* =========================================
   Portfolio JavaScript Functionality
   - Theme Toggle (Light/Dark)
   - Project Filtering (Projects Page Only)
   - Back to Top Button
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle Functionality ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if button exists before adding listener (robustness)
    if (themeToggleButton) {
        const themeIcon = themeToggleButton.querySelector('i'); // Get icon inside the button

        // Function to apply the theme and update icon/title
        const applyTheme = (theme) => {
            if (theme === 'light') {
                body.classList.add('light-theme');
                if (themeIcon) { // Check if icon exists
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
                themeToggleButton.title = 'Switch to dark theme';
            } else {
                body.classList.remove('light-theme');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
                themeToggleButton.title = 'Switch to light theme';
            }
        };

        // Load saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(savedTheme);

        // Add click listener
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme); // Save preference
        });
    } // End theme toggle check

    // --- Project Category Tab Functionality (ONLY for projects.html) ---
    const projectCategoriesContainer = document.querySelector('.project-categories');
    // Check if the category buttons exist on this page
    if (projectCategoriesContainer) {
        const categoryButtons = document.querySelectorAll('.category-button');
        const projectGrids = document.querySelectorAll('.projects-grid');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;

                // Deactivate all buttons & hide all grids first
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                projectGrids.forEach(grid => grid.style.display = 'none');

                // Activate the clicked button & show corresponding grid
                button.classList.add('active');
                const activeGrid = document.querySelector(`.projects-grid[data-category="${category}"]`);
                if (activeGrid) {
                    activeGrid.style.display = 'grid';
                }
            });
        });

        // Ensure the grid matching the initially active button is shown
        const initialActiveButton = document.querySelector('.category-button.active');
        if (initialActiveButton) {
             const initialCategory = initialActiveButton.dataset.category;
             const initialGrid = document.querySelector(`.projects-grid[data-category="${initialCategory}"]`);
             projectGrids.forEach(grid => grid.style.display = 'none'); // Hide all first
             if(initialGrid) initialGrid.style.display = 'grid'; // Show the active one
        } else if (categoryButtons.length > 0) {
            // Fallback: If no button is active by default in HTML, click the first one
            categoryButtons[0].click();
        }
    } // End project filtering check

    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) { // Check if button exists
        window.addEventListener('scroll', () => {
            // Show button if scrolled down more than 300px
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Add click listener for smooth scroll to top
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } // End Back to Top check

}); // End DOMContentLoaded
