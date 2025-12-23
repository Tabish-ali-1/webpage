// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

    // Set up smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Animate hero section on load
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero-title', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.hero-description', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.floating-card', {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            stagger: 0.3,
            ease: 'back.out(1.7)'
        }, '-=0.4')
        .from('.btn-primary', {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.3')
        .from('.phone-mockup', {
            opacity: 0,
            x: 100,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.8');

    // Animate phone mockup with floating effect
    gsap.to('.phone-mockup.phone-1', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Animate floating cards
    gsap.to('.floating-card.card-1', {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.3
    });

    gsap.to('.floating-card.card-2', {
        y: 15,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.6
    });

    // Service/Features Section Animation
    gsap.utils.toArray('.feature-card-large').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // About Section Animation
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.utils.toArray('.about-feature-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });

    // How It Works Section Animation
    gsap.from('.how-it-works .section-header', {
        scrollTrigger: {
            trigger: '.how-it-works',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.step-number', {
        scrollTrigger: {
            trigger: '.steps',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });

    gsap.from('.step-line', {
        scrollTrigger: {
            trigger: '.steps',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scaleX: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.utils.toArray('.step-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });

    // Donation Section Animation
    gsap.from('.donation-content', {
        scrollTrigger: {
            trigger: '.donation',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.donation-phone', {
        scrollTrigger: {
            trigger: '.donation',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.donation-text', {
        scrollTrigger: {
            trigger: '.donation',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Testimonials Section Animation
    gsap.from('.testimonials .section-title', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Footer Animation
    gsap.from('.footer-content', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.footer-phone', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Parallax effect for hero background
    gsap.to('.hero-background', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        ease: 'none'
    });

    // Animate step numbers on scroll
    const stepNumbers = document.querySelectorAll('.step-number');
    stepNumbers.forEach((step, index) => {
        ScrollTrigger.create({
            trigger: step,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(step, {
                    scale: 1.2,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Button hover animations
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Card hover animations
    const cards = document.querySelectorAll('.feature-card-large, .step-card, .about-feature-card, .floating-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -10,
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate app store buttons
    gsap.from('.app-store-btn, .google-play-btn', {
        scrollTrigger: {
            trigger: '.footer-apps',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Continuous rotation for decorative elements (if any)
    // You can add more animations here based on design needs

    // Intersection Observer for performance optimization
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.feature-card-large, .testimonial-card, .step-card').forEach(el => {
        observer.observe(el);
    });
});

// Scroll progress indicator (optional - uncomment if you add a progress bar element)
// gsap.to('.scroll-progress', {
//     scrollTrigger: {
//         trigger: 'body',
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: true
//     },
//     width: '100%'
// });

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        ScrollTrigger.refresh();
    }, 250);
});

