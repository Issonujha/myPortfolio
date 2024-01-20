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

function backColor() {
    const isEnabled = document.getElementById("navbarNav").classList.contains('bg-color');
    if (isEnabled === true) {
        document.getElementById("navbarNav").classList.remove('bg-color');
        if (document.getElementById("profile_btn") != null)
            document.getElementById("profile_btn").classList.add('btn');
        setTimeout('document.getElementById("nav-toog").setAttribute("disabled", "disabled")', 0);
    }
    else {
        document.getElementById("navbarNav").classList.add('bg-color');
        if (document.getElementById("profile_btn") != null)
            document.getElementById("profile_btn").classList.remove('btn');
        setTimeout('document.getElementById("nav-toog").setAttribute("disabled", "disabled")', 0);
    }
    setTimeout('document.getElementById("nav-toog").removeAttribute("disabled")', 400);
    console.log(isEnabled);
}

document.getElementById("nav-toog").addEventListener("click", backColor);