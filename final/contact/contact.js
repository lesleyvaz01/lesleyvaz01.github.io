
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Add an event listener to handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values of the input fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation: check if all fields are filled
    if (name === '' || email === '' || message === '') {
        formMessage.classList.add('error'); // Add error class to show error message
        formMessage.classList.remove('success'); // Remove success class
        formMessage.textContent = 'All fields are required!';
        return; // Stop form submission
    }

    // If validation passes, simulate a successful form submission
    formMessage.classList.add('success'); // Add success class to show success message
    formMessage.classList.remove('error'); // Remove error class
    formMessage.textContent = 'Your message has been sent successfully!';

    // Optionally, clear the form fields after successful submission
    form.reset();

    // You can also handle actual form submission to a backend API here
});