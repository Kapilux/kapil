// Smooth scroll behavior for CTA buttons and navigation
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    document.querySelectorAll('.process-card, .experience-card, .stat-card').forEach(el => {
        observer.observe(el);
    });

    // Add hover effects for interactive elements
    const cards = document.querySelectorAll('.process-card, .experience-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add floating animation to hero image
    const heroImage = document.querySelector('.designer-photo');
    if (heroImage) {
        setInterval(() => {
            heroImage.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                heroImage.style.transform = 'translateY(0px)';
            }, 2000);
        }, 4000);
    }

    // Add parallax effect to grid pattern
    const gridPattern = document.querySelector('.grid-pattern');
    if (gridPattern) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            gridPattern.style.transform = `translateY(${parallax}px)`;
        });
    }
});

// Add dynamic typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the line below to enable typing effect
        // typeWriter(heroTitle, originalText, 150);
    }
});

// Add CSS for scroll-based animations
const style = document.createElement('style');
style.textContent = `
    .process-card,
    .experience-card,
    .stat-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }

    .process-card.animate-in,
    .experience-card.animate-in,
    .stat-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .designer-photo {
        transition: transform 2s ease-in-out;
    }
`;
document.head.appendChild(style);