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
const navbar = document.getElementById('navbar');
const isHomePage = document.body.dataset.page === 'home';

if (isHomePage) {
    const heroBg = document.getElementById('heroBg');

    function handleNavbarScroll() {
        const heroBgBottom = heroBg.getBoundingClientRect().bottom;
        if (heroBgBottom <= 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

} else {
    // All other pages: always white navbar with dark text
    navbar.classList.add('solid');
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

const scrollEls = document.querySelectorAll('.animate-on-scroll');
    if (scrollEls.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      scrollEls.forEach(el => observer.observe(el));
    }
 
    // ── Page loader ──
    window.addEventListener('load', () => {
      const loader = document.getElementById('pageLoader');
      if (loader) loader.classList.add('hidden');
    });
 
    // ── Scroll progress bar ──
    window.addEventListener('scroll', () => {
      const bar = document.getElementById('scrollProgress');
      if (bar) {
        const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = pct + '%';
      }
      // Back to top visibility
      const btn = document.getElementById('backToTop');
      if (btn) btn.classList.toggle('visible', window.scrollY > 300);
      // Navbar scroll effect
      const nav = document.getElementById('navbar');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });
 
    // ── Back to top ──
    const btt = document.getElementById('backToTop');
    if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
 
    // ── Mobile menu ──
    const toggle = document.getElementById('mobileMenuToggle');
    const menu   = document.getElementById('navMenu');
    if (toggle && menu) toggle.addEventListener('click', () => menu.classList.toggle('active'));
 
    // ── Character counters ──
    function counter(textareaId, counterId) {
      const el = document.getElementById(textareaId);
      const ct = document.getElementById(counterId);
      if (!el || !ct) return;
      el.addEventListener('input', () => { ct.textContent = el.value.length; });
    }
    counter('whatWorked', 'workedCount');
    counter('improvements', 'improvCount');
    counter('oneChange', 'changeCount');
 
    // ── Form submit ──
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
      e.preventDefault();
 
      // Basic validation: at least a star rating
      const rating = document.querySelector('input[name="rating"]:checked');
      if (!rating) {
        alert('Please give us a star rating before submitting.');
        return;
      }
 
      // Hide form, show success card
      this.style.display = 'none';
      const card = document.getElementById('successCard');
      card.style.display = 'block';
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    if (scrollEls.length) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animated'); obs.unobserve(e.target); } });
      }, { threshold: 0.08 });
      scrollEls.forEach(el => obs.observe(el));
    }

    // ── Page loader ──
    window.addEventListener('load', () => {
      const l = document.getElementById('pageLoader');
      if (l) l.classList.add('hidden');
    });

    // ── Scroll events ──
    window.addEventListener('scroll', () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      const bar = document.getElementById('scrollProgress');
      if (bar) bar.style.width = pct + '%';
      const btn = document.getElementById('backToTop');
      if (btn) btn.classList.toggle('visible', window.scrollY > 300);
      const nav = document.getElementById('navbar');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    if (toggle && menu) toggle.addEventListener('click', () => menu.classList.toggle('active'));

    // ── Tab switcher ──
    function switchTab(panel, btn) {
      // Hide all panels, deactivate all tabs
      document.querySelectorAll('.path-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.path-tab').forEach(t => t.classList.remove('active'));
      // Show selected
      document.getElementById('panel-' + panel).classList.add('active');
      btn.classList.add('active');
      // Re-trigger animations in the newly visible panel
      document.querySelectorAll('#panel-' + panel + ' .animate-on-scroll:not(.animated)').forEach(el => {
        el.classList.add('animated');
      });
    }

    function counter(textareaId, counterId) {
      const el = document.getElementById(textareaId);
      const ct = document.getElementById(counterId);
      if (!el || !ct) return;
      el.addEventListener('input', () => { ct.textContent = el.value.length; });
    }
    counter('whatWorked', 'workedCount');
    counter('improvements', 'improvCount');
    counter('oneChange', 'changeCount');

    // ── Form submit ──
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic validation: at least a star rating
      const rating = document.querySelector('input[name="rating"]:checked');
      if (!rating) {
        alert('Please give us a star rating before submitting.');
        return;
      }

      // Hide form, show success card
      this.style.display = 'none';
      const card = document.getElementById('successCard');
      card.style.display = 'block';
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });