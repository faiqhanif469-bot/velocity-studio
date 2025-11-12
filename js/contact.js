// Initialize EmailJS
(function() {
    emailjs.init("tWE2d29jfiR3plOgu"); // Your Public Key
})();

// Contact Form Handling with EmailJS
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const templateParams = {
                name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value || 'Not provided',
                service: document.getElementById('service').value,
                message: document.getElementById('message').value,
                to_email: 'faiqhanif469@gmail.com',
                time: new Date().toLocaleString()
            };
            
            try {
                // Send email using EmailJS
                const response = await emailjs.send(
                    'service_zk0lx0n',  // Your Gmail Service ID
                    'template_od8bdd3', // Your Template ID
                    templateParams
                );
                
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                showSuccessMessage();
                
                // Reset form
                contactForm.reset();
                
            } catch (error) {
                console.error('FAILED...', error);
                showErrorMessage();
            } finally {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #10a37f 0%, #0d8c6d 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 1.5rem;
            animation: slideDown 0.5s ease;
        ">
            <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Thank you for reaching out!</h3>
            <p style="margin: 0; opacity: 0.9;">We'll get back to you within 24 hours.</p>
        </div>
    `;
    
    form.parentElement.insertBefore(successDiv, form);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => successDiv.remove(), 500);
    }, 5000);
}

function showErrorMessage() {
    const form = document.getElementById('contactForm');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 1.5rem;
            animation: slideDown 0.5s ease;
        ">
            <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Oops! Something went wrong</h3>
            <p style="margin: 0; opacity: 0.9;">Please try again or email us directly at faiqhanif469@gmail.com</p>
        </div>
    `;
    
    form.parentElement.insertBefore(errorDiv, form);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        errorDiv.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => errorDiv.remove(), 500);
    }, 5000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);
