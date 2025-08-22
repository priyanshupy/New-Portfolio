// Journey-Style Portfolio Website with Bootstrap
class PortfolioJourney {
    constructor() {
        this.currentSection = 0;
        this.sections = [];
        this.isScrolling = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeSections();
        this.setupAnimations();
        this.setupProgressBar();
        this.showFirstSection();
    }

    setupEventListeners() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                this.scrollToSection(targetId);
            });
        });

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
        }

        // Navbar scroll effect
        window.addEventListener('scroll', () => this.handleNavbarScroll());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));

        // Touch/swipe support for mobile
        this.setupTouchNavigation();
    }

    initializeSections() {
        this.sections = Array.from(document.querySelectorAll('.journey-section'));
        this.sections.forEach((section, index) => {
            section.dataset.sectionIndex = index;
        });
    }

    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionContent = entry.target.querySelector('.section-content');
                    if (sectionContent) {
                        sectionContent.classList.add('visible');
                    }
                    
                    // Update current section
                    this.currentSection = parseInt(entry.target.dataset.sectionIndex);
                    this.updateProgressBar();
                    this.updateNavigation();
                }
            });
        }, observerOptions);

        // Observe all journey sections
        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    setupProgressBar() {
        this.progressBar = document.getElementById('progress-bar');
    }

    setupTouchNavigation() {
        let startY = 0;
        let startX = 0;

        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            startX = e.touches[0].clientX;
        });

        document.addEventListener('touchend', (e) => {
            if (this.isScrolling) return;

            const endY = e.changedTouches[0].clientY;
            const endX = e.changedTouches[0].clientX;
            const diffY = startY - endY;
            const diffX = startX - endX;

            // Only handle vertical swipes
            if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
                if (diffY > 0) {
                    // Swipe up - go to next section
                    this.navigateToNextSection();
                } else {
                    // Swipe down - go to previous section
                    this.navigateToPreviousSection();
                }
            }
        });
    }

    handleKeyboardNavigation(e) {
        switch(e.key) {
            case 'ArrowDown':
            case 'PageDown':
                e.preventDefault();
                this.navigateToNextSection();
                break;
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                this.navigateToPreviousSection();
                break;
            case 'Home':
                e.preventDefault();
                this.scrollToSection('#hero');
                break;
            case 'End':
                e.preventDefault();
                this.scrollToSection('#contact');
                break;
        }
    }

    navigateToNextSection() {
        if (this.currentSection < this.sections.length - 1) {
            const nextSection = this.sections[this.currentSection + 1];
            this.scrollToSection(`#${nextSection.id}`);
        }
    }

    navigateToPreviousSection() {
        if (this.currentSection > 0) {
            const prevSection = this.sections[this.currentSection - 1];
            this.scrollToSection(`#${prevSection.id}`);
        }
    }

    scrollToSection(targetId) {
        if (this.isScrolling) return;
        
        this.isScrolling = true;
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update current section
            this.currentSection = parseInt(targetSection.dataset.sectionIndex);
            
            // Reset scrolling flag after animation
            setTimeout(() => {
                this.isScrolling = false;
            }, 1000);
        }
    }

    showFirstSection() {
        // Show hero section content immediately
        const heroSection = document.querySelector('#hero .section-content');
        if (heroSection) {
            setTimeout(() => {
                heroSection.classList.add('visible');
            }, 500);
        }
    }

    updateProgressBar() {
        if (this.progressBar) {
            const progress = ((this.currentSection + 1) / this.sections.length) * 100;
            this.progressBar.style.width = `${progress}%`;
        }
    }

    updateNavigation() {
        // Update active navigation link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        const currentSectionId = this.sections[this.currentSection].id;
        const activeLink = document.querySelector(`.nav-link[href="#${currentSectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    handleNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    async handleContactForm(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Show loading state
        submitBtn.innerHTML = `
            <div class="spinner-border spinner-border-sm me-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            Sending...
        `;
        submitBtn.disabled = true;
        
        try {
            // Send email using EmailJS
            await this.sendEmail(name, email, message);
            
            // Show success message
            this.showAlert('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            form.reset();
            
        } catch (error) {
            console.error('Error sending message:', error);
            this.showAlert('Failed to send message. Please try again or email me directly at priyanshupareta@gmail.com', 'danger');
        } finally {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async sendEmail(name, email, message) {
        // Using EmailJS service
        const templateParams = {
            to_email: 'priyanshupareta@gmail.com',
            from_name: name,
            from_email: email,
            message: message,
            subject: `Portfolio Contact: ${name}`
        };

        // If EmailJS is not loaded, fallback to mailto
        if (typeof emailjs === 'undefined') {
            const mailtoLink = `mailto:priyanshupareta@gmail.com?subject=${encodeURIComponent(templateParams.subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            window.open(mailtoLink);
            return Promise.resolve();
        }

        // Send via EmailJS
        return emailjs.send('service_id', 'template_id', templateParams, 'user_id');
    }

    showAlert(message, type = 'info') {
        // Remove existing alerts
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // Create new alert
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 1050; min-width: 300px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }

    // Add some interactive features
    addFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 2}s`;
        });
    }

    // Parallax effect for floating elements
    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const floatingElements = document.querySelectorAll('.floating-element');
            
            floatingElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
            });
        });
    }

    // Add typing effect to hero title
    setupTypingEffect() {
        const heroTitle = document.querySelector('#hero h2');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            // Start typing after hero section is visible
            setTimeout(typeWriter, 1000);
        }
    }

    // Enhanced mobile experience
    setupMobileEnhancements() {
        if (window.innerWidth <= 768) {
            // Add touch feedback to cards
            const cards = document.querySelectorAll('.project-card, .timeline-item');
            cards.forEach(card => {
                card.addEventListener('touchstart', () => {
                    card.style.transform = 'scale(0.98)';
                });
                
                card.addEventListener('touchend', () => {
                    card.style.transform = 'scale(1)';
                });
            });
        }
    }
}

// Initialize the portfolio journey when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioJourney = new PortfolioJourney();
    
    // Add some additional enhancements
    setTimeout(() => {
        window.portfolioJourney.addFloatingElements();
        window.portfolioJourney.setupParallax();
        window.portfolioJourney.setupTypingEffect();
        window.portfolioJourney.setupMobileEnhancements();
    }, 1000);
});

// Add some CSS animations for enhanced visual appeal
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInFromBottom {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInFromLeft {
        0% {
            opacity: 0;
            transform: translateX(-50px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInFromRight {
        0% {
            opacity: 0;
            transform: translateX(50px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .timeline-item:nth-child(odd) {
        animation: slideInFromLeft 0.8s ease-out;
    }
    
    .timeline-item:nth-child(even) {
        animation: slideInFromRight 0.8s ease-out;
    }
    
    .project-card {
        animation: slideInFromBottom 0.8s ease-out;
    }
    
    .metric-card {
        animation: slideInFromBottom 0.6s ease-out;
    }
    
    .metric-card:nth-child(1) { animation-delay: 0.1s; }
    .metric-card:nth-child(2) { animation-delay: 0.2s; }
    .metric-card:nth-child(3) { animation-delay: 0.3s; }
    
    .nav-link.active {
        color: #667eea !important;
        font-weight: 600;
    }
    
    .nav-link {
        position: relative;
        transition: all 0.3s ease;
    }
    
    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }
    
    .nav-link:hover::after,
    .nav-link.active::after {
        width: 100%;
    }
    
    .btn {
        transition: all 0.3s ease;
    }
    
    .btn:hover {
        transform: translateY(-2px);
    }
    
    .card {
        transition: all 0.3s ease;
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    /* Smooth scrolling for the entire page */
    html {
        scroll-behavior: smooth;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    }
`;

document.head.appendChild(style);
