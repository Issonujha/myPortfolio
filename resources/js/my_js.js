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
function colapse() {
    console.log("Collapse");
    document.getElementById("navbarNav").classList.add('bg-color');
    document.getElementById("navbarNav").classList.remove("show");
}
document.addEventListener("click", colapse);

var url = window.location.href;

var path = String(url).substring(String(url).lastIndexOf("/") + 1, String(url).length);
console.log(path)
if (path == "" || path == "projects.html" || path == "index.html" || path == "contact.html") {
    console.log(true);
} else {
    location.replace("https://sonujha.in/error.html");
}