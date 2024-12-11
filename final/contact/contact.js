//declarations
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    // way to get the input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // check to see if all things have been entered
    if (name === '' || email === '' || message === '') {
        formMessage.classList.add('error'); // erorrrrr
        formMessage.classList.remove('success'); 
        formMessage.textContent = 'All fields are required!';
        return; // stop
    }

    // basically says it was done
    formMessage.classList.add('success'); 
    formMessage.classList.remove('error'); 
    formMessage.textContent = 'Your message has been sent successfully!';

  
    form.reset();


});