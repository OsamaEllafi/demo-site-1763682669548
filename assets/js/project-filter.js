document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filter = button.dataset.filter;

            projectCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex'; // Show card
                    // Optional: re-trigger animation if desired, but might be too much
                    // card.classList.remove('is-visible');
                    // setTimeout(() => card.classList.add('is-visible'), 10);
                } else {
                    card.style.display = 'none'; // Hide card
                }
            });
        });
    });
});