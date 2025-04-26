// script.js

const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
}

