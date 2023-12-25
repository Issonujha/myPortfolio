var currentPage = window.location.href;

function markLinkAsActive() {
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        if (link.href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
window.onload = markLinkAsActive;

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
}
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
const storedDarkModeState = localStorage.getItem('darkModeEnabled');
if (storedDarkModeState === 'true') {
    document.body.classList.add('dark-mode');
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);