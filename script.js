document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for the projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.classList.add('fade-in');
    }

    // Simple hover effect for project cards (already in CSS, but can be done here too)
    // const projectCards = document.querySelectorAll('.project-card');
    // projectCards.forEach(card => {
    //     card.addEventListener('mouseover', () => {
    //         card.style.transform = 'translateY(-8px)';
    //         card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.4)';
    //     });
    //     card.addEventListener('mouseout', () => {
    //         card.style.transform = 'translateY(0)';
    //         card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
    //     });
    // });
});
