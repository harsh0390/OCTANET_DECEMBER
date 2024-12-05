// 1. Dynamic Greeting Message
function setGreeting() {
    const greetingElement = document.querySelector('#hero h2');
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingElement.textContent = "Good Morning! Revolutionize Your Business with AI";
    } else if (hour < 18) {
        greetingElement.textContent = "Good Afternoon! Revolutionize Your Business with AI";
    } else {
        greetingElement.textContent = "Good Evening! Revolutionize Your Business with AI";
    }
}

// 2. Smooth Scrolling
function enableSmoothScroll() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// 3. Form Validation
function setupFormValidation() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields before submitting.');
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Initialize all features when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setGreeting();
    enableSmoothScroll();
    setupFormValidation();
});
