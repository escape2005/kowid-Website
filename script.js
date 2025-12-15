// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

// Page Load Animation
window.addEventListener('load', () => {
    // Create page loader if it doesn't exist
    let pageLoader = document.querySelector('.page-loader');
    if (!pageLoader) {
        pageLoader = document.createElement('div');
        pageLoader.className = 'page-loader';
        pageLoader.innerHTML = '<div class="loader-spinner"></div>';
        document.body.prepend(pageLoader);
    }
    
    // Hide loader after a short delay
    setTimeout(() => {
        pageLoader.classList.add('hidden');
        setTimeout(() => {
            pageLoader.remove();
        }, 500);
    }, 300);
});

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Scroll Progress Bar
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (!scrollProgress) {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.prepend(progressBar);
    }
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Update scroll progress
    updateScrollProgress();
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Advanced scroll-based animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
});

// Observe cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .overview-item, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add scroll animations to cards with different directions
    const cards = document.querySelectorAll('.cards-grid .card');
    cards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        
        // Alternate animation directions
        if (index % 3 === 0) {
            card.classList.add('fade-up');
        } else if (index % 3 === 1) {
            card.classList.add('fade-left');
        } else {
            card.classList.add('fade-right');
        }
        
        // Add stagger delays
        const staggerClass = `stagger-${(index % 6) + 1}`;
        card.classList.add(staggerClass);
        
        scrollObserver.observe(card);
    });

    // Animate two-column grids
    const twoColItems = document.querySelectorAll('.two-column-grid > *');
    twoColItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.classList.add(index % 2 === 0 ? 'fade-left' : 'fade-right');
        item.classList.add(`stagger-${index + 1}`);
        scrollObserver.observe(item);
    });

    // Animate highlight boxes
    const highlightBoxes = document.querySelectorAll('.highlight-box');
    highlightBoxes.forEach((box, index) => {
        box.classList.add('animate-on-scroll', 'scale-in');
        box.classList.add(`stagger-${index + 1}`);
        scrollObserver.observe(box);
    });

    // Animate feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll', 'fade-up');
        item.classList.add(`stagger-${(index % 6) + 1}`);
        scrollObserver.observe(item);
    });

    // Animate page headers
    const pageHeaders = document.querySelectorAll('.page-header h1, .page-header p');
    pageHeaders.forEach((header, index) => {
        header.classList.add('animate-on-scroll', 'fade-up');
        header.classList.add(`stagger-${index + 1}`);
        scrollObserver.observe(header);
    });

    // Parallax effect for images
    const cardImages = document.querySelectorAll('.card-image');
    cardImages.forEach(img => {
        img.style.transition = 'transform 0.3s ease';
        img.parentElement.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
        });
        img.parentElement.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});

// Form validation (if forms are added)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add active class to current nav item based on page
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });

    // Create and add Back to Top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
