// ========================
// Mobile Menu Toggle
// ========================

/**
 * Toggle mobile navigation menu
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animate hamburger icon
        hamburger.style.transform = navMenu.classList.contains('active') 
            ? 'rotate(90deg)' 
            : 'rotate(0)';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.style.transform = 'rotate(0)';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.style.transform = 'rotate(0)';
        }
    });
}

// ========================
// Form Validation
// ========================

/**
 * Validate name field
 * @param {string} name - User's name input
 * @returns {boolean} - True if valid
 */
function validateName(name) {
    // Check if name is not empty and has at least 2 characters
    if (name.trim().length < 2) {
        return false;
    }
    // Check if name contains only letters and spaces
    return /^[a-zA-Z\s]+$/.test(name.trim());
}

/**
 * Validate email field
 * @param {string} email - User's email input
 * @returns {boolean} - True if valid
 */
function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validate rating selection
 * @param {string} rating - Selected rating value
 * @returns {boolean} - True if rating is selected
 */
function validateRating(rating) {
    return rating !== '' && rating !== undefined;
}

/**
 * Validate message field
 * @param {string} message - User's feedback message
 * @returns {boolean} - True if valid
 */
function validateMessage(message) {
    // Check if message has at least 10 characters
    return message.trim().length >= 10;
}

/**
 * Display error message for a form field
 * @param {HTMLElement} field - Input field element
 * @param {string} message - Error message to display
 */
function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
    errorElement.textContent = message;
    
    // Add shake animation
    field.style.animation = 'none';
    setTimeout(() => {
        field.style.animation = 'slideInUp 0.3s ease';
    }, 10);
}

/**
 * Clear error message for a form field
 * @param {HTMLElement} field - Input field element
 */
function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('error');
    errorElement.textContent = '';
}

/**
 * Mark field as successfully validated
 * @param {HTMLElement} field - Input field element
 */
function markFieldSuccess(field) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.add('success');
    clearFieldError(field);
}

// ========================
// Form Submission
// ========================

/**
 * Handle feedback form submission
 */
function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (!feedbackForm) return;

    // Get form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ratingInput = document.getElementById('rating');
    const messageInput = document.getElementById('message');

    // Real-time validation on input change
    nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim() === '') {
            showFieldError(nameInput, 'Name is required');
        } else if (!validateName(nameInput.value)) {
            showFieldError(nameInput, 'Please enter a valid name (letters and spaces only)');
        } else {
            markFieldSuccess(nameInput);
        }
    });

    emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim() === '') {
            showFieldError(emailInput, 'Email is required');
        } else if (!validateEmail(emailInput.value)) {
            showFieldError(emailInput, 'Please enter a valid email address');
        } else {
            markFieldSuccess(emailInput);
        }
    });

    ratingInput.addEventListener('change', () => {
        if (!validateRating(ratingInput.value)) {
            showFieldError(ratingInput, 'Please select a rating');
        } else {
            markFieldSuccess(ratingInput);
        }
    });

    messageInput.addEventListener('blur', () => {
        if (messageInput.value.trim() === '') {
            showFieldError(messageInput, 'Message is required');
        } else if (!validateMessage(messageInput.value)) {
            showFieldError(messageInput, 'Message must be at least 10 characters long');
        } else {
            markFieldSuccess(messageInput);
        }
    });

    // Form submission
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        let isFormValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            showFieldError(nameInput, 'Name is required');
            isFormValid = false;
        } else if (!validateName(nameInput.value)) {
            showFieldError(nameInput, 'Please enter a valid name (letters and spaces only)');
            isFormValid = false;
        } else {
            clearFieldError(nameInput);
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            showFieldError(emailInput, 'Email is required');
            isFormValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showFieldError(emailInput, 'Please enter a valid email address');
            isFormValid = false;
        } else {
            clearFieldError(emailInput);
        }

        // Validate rating
        if (!validateRating(ratingInput.value)) {
            showFieldError(ratingInput, 'Please select a rating');
            isFormValid = false;
        } else {
            clearFieldError(ratingInput);
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            showFieldError(messageInput, 'Message is required');
            isFormValid = false;
        } else if (!validateMessage(messageInput.value)) {
            showFieldError(messageInput, 'Message must be at least 10 characters long');
            isFormValid = false;
        } else {
            clearFieldError(messageInput);
        }

        // If all fields are valid, show success message
        if (isFormValid) {
            showSuccessMessage(nameInput.value, emailInput.value, ratingInput.value);
            feedbackForm.reset();
            
            // Clear success states
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('success', 'error');
            });
        }
    });
}

/**
 * Show success message after form submission
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} rating - Selected rating
 */
function showSuccessMessage(name, email, rating) {
    const successMessage = `
Thank you for your feedback, ${name}!

Your response has been recorded:
✓ Email: ${email}
✓ Rating: ${'⭐'.repeat(rating)}

We appreciate your valuable feedback and will use it to improve our service.
    `;

    // Show alert
    alert(successMessage);

    // Optional: Send data to server (simulate with console log)
    const formData = {
        name: name,
        email: email,
        rating: rating,
        timestamp: new Date().toLocaleString()
    };

    console.log('Form submitted successfully:', formData);

    // Optional: Show a temporary success notification at the top of the page
    showNotification('Your feedback has been submitted successfully!', 'success');
}

/**
 * Show temporary notification
 * @param {string} message - Notification message
 * @param {string} type - Notification type ('success', 'error', 'info')
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#27AE60' : type === 'error' ? '#E74C3C' : '#3498DB'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        max-width: 90vw;
    `;

    // Add animation
    const style = document.createElement('style');
    if (!document.querySelector('style[data-notification-animation]')) {
        style.setAttribute('data-notification-animation', '');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(300px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(300px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ========================
// Offer Card Interactions
// ========================

/**
 * Add click event listeners to offer claim buttons
 */
function initOfferButtons() {
    const offerButtons = document.querySelectorAll('.offer-card .btn-secondary');

    offerButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the offer card title
            const cardTitle = button.closest('.offer-card').querySelector('.card-content h3').textContent;
            
            // Show notification
            showNotification(`Offer "${cardTitle}" claimed successfully! Show at checkout.`, 'success');
            
            // Add visual feedback
            button.style.background = '#27AE60';
            button.textContent = '✓ Claimed';
            
            setTimeout(() => {
                button.style.background = '';
                button.textContent = 'Claim Offer';
            }, 2000);
        });
    });
}

// ========================
// Smooth Scrolling Enhancement
// ========================

/**
 * Add scroll event listener for sticky navigation
 */
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }
    });
}

// ========================
// Initialization
// ========================

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Offers & Feedback application...');
    
    // Initialize all features
    initMobileMenu();
    initFeedbackForm();
    initOfferButtons();
    initScrollEffects();
    
    console.log('Application initialized successfully!');
});

// ========================
// Error Handling
// ========================

/**
 * Global error handler
 */
window.addEventListener('error', (event) => {
    console.error('An error occurred:', event.error);
    // You can send error logs to a server here
});

/**
 * Unhandled promise rejection handler
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
