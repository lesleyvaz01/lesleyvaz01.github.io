
  const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});


const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // 50px offset for header
            behavior: 'smooth',
        });
    });
});








  