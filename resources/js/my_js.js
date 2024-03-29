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
        if (!document.getElementById("navbarNav").classList.contains("show")) {
            document.getElementById("navbarNav").classList.add('bg-color');
            if (document.getElementById("profile_btn") != null)
                setTimeout("document.getElementById('profile_btn').classList.remove('btn')", 0);
        }
        if (document.getElementById("profile_btn") != null)
            if (document.getElementById('profile_btn').classList.contains('btn'))
                setTimeout("document.getElementById('profile_btn').classList.remove('btn')", 0);
            else
                setTimeout("document.getElementById('profile_btn').classList.add('btn')", 0);
        setTimeout('document.getElementById("nav-toog").setAttribute("disabled", "disabled")', 0);
    }
    else {
        document.getElementById("navbarNav").classList.add('bg-color');
        if (document.getElementById("profile_btn") != null)
            setTimeout("document.getElementById('profile_btn').classList.remove('btn')", 0);
        setTimeout('document.getElementById("nav-toog").setAttribute("disabled", "disabled")', 0);
    }
    setTimeout('document.getElementById("nav-toog").removeAttribute("disabled")', 500);
    console.log(isEnabled);
}

document.getElementById("nav-toog").addEventListener("click", backColor);
function colapse() {
    if (document.getElementById("navbarNav").classList.contains("show")) {
        console.log("Collapse");
        document.getElementById("navbarNav").classList.remove("show");
        document.getElementById("navbarNav").classList.add('bg-color');
        if (document.getElementById("profile_btn") != null)
            document.getElementById('profile_btn').classList.add('btn')
    }
}
document.getElementById('main').addEventListener("click", colapse);

if (document.getElementById("submitForm") != null)
    document.getElementById("submitForm").addEventListener('click', disableButton);

function disableButton() {
    setTimeout('document.getElementById("submitForm").classList.remove("btn")', 100);
    setTimeout('document.getElementById("submitForm").setAttribute("disabled", "disabled")', 100);
}


