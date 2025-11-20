document.addEventListener('DOMContentLoaded', () => {
    // Hero Typing Effect
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) {
        const text = heroTagline.dataset.text;
        heroTagline.innerHTML = ''; // Clear original text
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTagline.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 70); // Typing speed
            } else {
                // Optional: cursor blink effect after typing
                heroTagline.classList.add('typed');
            }
        }
        // Add a small delay before starting to type
        setTimeout(typeWriter, 500);
    }

    // Scroll-triggered animations (using Intersection Observer)
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add typing cursor effect CSS for hero tagline
    const style = document.createElement('style');
    style.innerHTML = `
        .hero-tagline {
            position: relative;
        }
        .hero-tagline::after {
            content: '|';
            position: absolute;
            right: -5px; /* Adjust as needed */
            animation: blink-caret 0.75s step-end infinite;
            color: var(--accent-color-2);
        }
        .hero-tagline.typed::after {
            animation: none; /* Stop blinking after typing if desired */
            opacity: 0; /* Hide cursor after typing */
        }

        @keyframes blink-caret {
            from, to { opacity: 0; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});