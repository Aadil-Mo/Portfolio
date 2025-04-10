// Wait until the HTML is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle Functionality ---
    // Purpose: Allow users to switch between dark (default) and light themes.
    // How: Adds/removes a 'light-theme' class to the body and saves preference to localStorage.

    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleButton.querySelector('i'); // Get the icon element within the button

    // Function to apply the chosen theme (either 'light' or 'dark')
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme'); // Add class to body for CSS rules
            themeIcon.classList.remove('fa-moon'); // Change icon to sun
            themeIcon.classList.add('fa-sun');
            themeToggleButton.title = 'Switch to dark theme'; // Update button tooltip
        } else {
            body.classList.remove('light-theme'); // Remove class for dark theme
            themeIcon.classList.remove('fa-sun'); // Change icon back to moon
            themeIcon.classList.add('fa-moon');
            themeToggleButton.title = 'Switch to light theme';
        }
    };

    // On page load, check if a theme preference is saved in localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to 'dark' if nothing saved
    applyTheme(savedTheme); // Apply the saved or default theme

    // Add click event listener to the theme toggle button
    themeToggleButton.addEventListener('click', () => {
        // Check the current theme by seeing if the body has the 'light-theme' class
        const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        // Determine the new theme
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        // Apply the new theme visually
        applyTheme(newTheme);
        // Save the new theme preference to localStorage so it persists
        localStorage.setItem('theme', newTheme);
    });
    // --- End Theme Toggle ---


    // --- Project Category Tab Functionality ---
    // Purpose: Filter projects shown based on the category button clicked.
    // How: Adds/removes 'active' class on buttons and hides/shows project grids.
    // **Important:** This should ONLY run on the projects.html page.

    const projectCategoriesContainer = document.querySelector('.project-categories');
    // Check if the element that contains the category buttons exists on the current page
    if (projectCategoriesContainer) {
        const categoryButtons = document.querySelectorAll('.category-button');
        const projectGrids = document.querySelectorAll('.projects-grid');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category; // Get category from data-attribute

                // Deactivate all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Hide all project grids
                projectGrids.forEach(grid => grid.style.display = 'none');

                // Activate the clicked button
                button.classList.add('active');
                // Find the grid corresponding to the clicked button's category
                const activeGrid = document.querySelector(`.projects-grid[data-category="${category}"]`);
                // Show the corresponding grid (using 'grid' as display value matches CSS)
                if (activeGrid) {
                    activeGrid.style.display = 'grid';
                }
            });
        });

        // Ensure the initial category (set as 'active' in HTML) is displayed on load
        const initialActiveButton = document.querySelector('.category-button.active');
        if (initialActiveButton) {
             const initialCategory = initialActiveButton.dataset.category;
             const initialGrid = document.querySelector(`.projects-grid[data-category="${initialCategory}"]`);
             // Hide all grids first
             projectGrids.forEach(grid => grid.style.display = 'none');
             // Then show the one that should be initially active
             if(initialGrid) initialGrid.style.display = 'grid';
        }
    } // End of project filtering check (if projectCategoriesContainer)
    // --- End Project Filtering ---


    // --- Back to Top Button ---
    // Purpose: Show a button when the user scrolls down, allowing them to smoothly scroll back to the top.
    // How: Listens for scroll events to show/hide the button, handles click to scroll.

    const backToTopButton = document.getElementById('back-to-top');
    // Check if the button actually exists on the current page
    if (backToTopButton) {
        // Listen for scroll events on the window
        window.addEventListener('scroll', () => {
            // Check how far down the page is scrolled
            if (window.scrollY > 300) { // If scrolled more than 300 pixels
                backToTopButton.classList.add('visible'); // Add 'visible' class (styled in CSS)
            } else {
                backToTopButton.classList.remove('visible'); // Remove class to hide it
            }
        });

        // Listen for clicks on the back-to-top button
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default '#' link behavior (jumping to top instantly)
            // Scroll smoothly back to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // This enables the smooth scrolling animation
            });
        });
    } // End of Back to Top check (if backToTopButton)
    // --- End Back to Top ---


    // --- REMOVED CODE ---
    // Note: I removed the JavaScript for Smooth Scrolling for Nav links
    // and the ScrollSpy functionality because they were designed for a single-page
    // layout. In this multi-page setup, navigation clicks load new pages,
    // and the active link is set directly in the HTML of each page.
    // --- End Removed Code ---


    // --- Optional: Simple Fade-in Animation on Scroll ---
    // Purpose: Add a subtle fade-in effect to sections as they enter the viewport.
    // How: Uses Intersection Observer API for performance. Add 'fade-in-section' class in HTML.
    // Note: Uncomment the code below if I want to use this effect.

    /*
    const fadeElements = document.querySelectorAll('.fade-in-section'); // Select elements to fade in

    const fadeInObserverOptions = {
        root: null, // Observe intersection relative to the viewport
        rootMargin: '0px', // No margin
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // If the element is in view
                entry.target.classList.add('visible'); // Add the 'visible' class (styled in CSS)
                // Optional: If I only want it to animate once, uncomment the next line
                // observer.unobserve(entry.target);
            }
             // Optional: If I want it to fade out when scrolling away, uncomment below
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, fadeInObserverOptions);

    // Apply the initial class and start observing each element
    fadeElements.forEach(el => {
       //el.classList.add('fade-in-section'); // Add this class in HTML instead if preferred
       fadeInObserver.observe(el);
    });
    */
    // --- End Fade-in Animation ---


}); // End DOMContentLoaded wrapper
