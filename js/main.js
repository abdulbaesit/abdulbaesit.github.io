// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // DOM Elements
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const statNumbers = document.querySelectorAll('.stat-number');
    const floatingElements = document.querySelectorAll('.floating-element');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Dark mode functionality
    function initDarkMode() {
        console.log('Dark mode toggle element:', darkModeToggle);

        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.body.classList.add('dark-mode');
            console.log('Dark mode loaded from localStorage');
        }

        // Toggle dark mode
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                console.log('Dark mode toggle clicked');
                document.body.classList.toggle('dark-mode');
                const isDarkMode = document.body.classList.contains('dark-mode');
                localStorage.setItem('darkMode', isDarkMode);
                console.log('Dark mode:', isDarkMode);
            });
        } else {
            console.error('Dark mode toggle button not found!');
        }
    }

    // Initialize dark mode
    initDarkMode();

    // Test function to manually toggle dark mode (for debugging)
    window.testDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        console.log('Dark mode toggled manually. Current state:', document.body.classList.contains('dark-mode'));
    };

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            if (document.body.classList.contains('dark-mode')) {
                navbar.style.background = 'rgba(26, 26, 26, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        } else {
            if (document.body.classList.contains('dark-mode')) {
                navbar.style.background = 'rgba(26, 26, 26, 0.95)';
                navbar.style.boxShadow = 'none';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    });

    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            if (backToTopBtn) backToTopBtn.classList.add('show');
        } else {
            if (backToTopBtn) backToTopBtn.classList.remove('show');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Floating elements parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        floatingElements.forEach(element => {
            const speed = element.getAttribute('data-speed');
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Mouse interaction with floating elements
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        floatingElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const elementX = rect.left + rect.width / 2;
            const elementY = rect.top + rect.height / 2;

            const deltaX = mouseX - elementX;
            const deltaY = mouseY - elementY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance < 200) {
                const moveX = (deltaX / distance) * 10;
                const moveY = (deltaY / distance) * 10;
                element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
                element.style.opacity = '0.9';
            } else {
                element.style.transform = 'translate(0px, 0px) scale(1)';
                element.style.opacity = '0.6';
            }
        });
    });

    // Hero section animations
    gsap.timeline()
        .from('.title.has-text-primary.is-3', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.content', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.3');

    // Section animations
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Project animations
    gsap.from('.project-item', {
        scrollTrigger: {
            trigger: '.projects-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Experience animations
    gsap.from('.experience-item', {
        scrollTrigger: {
            trigger: '.experience-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Education animations
    gsap.from('.education-item', {
        scrollTrigger: {
            trigger: '.education-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Awards animations
    gsap.from('.award-item', {
        scrollTrigger: {
            trigger: '.awards-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Courses animations
    gsap.from('.course-item', {
        scrollTrigger: {
            trigger: '.courses-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Number counter animation
    const animateNumbers = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2;
            const increment = target / (duration * 60);
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };

            updateCounter();
        });
    };

    // Trigger number animation when stats section is visible
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        ScrollTrigger.create({
            trigger: statsSection,
            start: 'top 80%',
            onEnter: () => animateNumbers()
        });
    }

    // Contact form handling
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all fields');
                return;
            }

            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });
    }

    // Project filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    gsap.to(card, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(card, {
                        opacity: 0,
                        y: 20,
                        duration: 0.3,
                        ease: 'power2.out',
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });

    // Typing effect
    const typeWriter = (element, text, speed = 100) => {
        let i = 0;
        element.textContent = '';

        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };

        type();
    };

    // Initialize typing effect when page loads
    window.addEventListener('load', () => {
        const heroTitle = document.querySelector('.title.has-text-primary.is-3');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 150);
        }
    });

    // Smooth reveal animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle (if needed)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Performance optimization: Throttle scroll events
    let ticking = false;

    function updateOnScroll() {
        // Update any scroll-based animations here
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // Initialize all animations when DOM is loaded
    ScrollTrigger.refresh();

    // Floating Action Button functionality
    const fabButton = document.getElementById('fabButton');
    const fabContainer = document.querySelector('.fab-container');
    const fabItems = document.querySelectorAll('.fab-item');

    if (fabButton && fabContainer) {
        fabButton.addEventListener('click', () => {
            fabContainer.classList.toggle('active');
        });

        // Close FAB menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!fabContainer.contains(e.target)) {
                fabContainer.classList.remove('active');
            }
        });

        // FAB item actions
        fabItems.forEach(item => {
            item.addEventListener('click', () => {
                const action = item.getAttribute('data-action');

                switch (action) {
                    case 'scroll-top':
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        break;
                    case 'scroll-bottom':
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: 'smooth'
                        });
                        break;
                    case 'toggle-theme':
                        const themeToggle = document.getElementById('theme-toggle');
                        if (themeToggle) {
                            themeToggle.click();
                        }
                        break;
                }

                fabContainer.classList.remove('active');
            });
        });
    }



    // Contact form enhanced functionality
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });
    }



    gsap.from('.contact-content', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // Add any additional initialization code here
    console.log('Portfolio website loaded successfully!');
});
