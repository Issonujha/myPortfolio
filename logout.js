// Import the functions you need from the SDKs you need
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

// Initialize Firebase Authentication and get a reference to the service
const firebaseConfig = {
    apiKey: "AIzaSyCPNWRvTubjG5WXsT4pGsj9Jga-bh2XEZ0",
    authDomain: "myportfolio-bb8f2.firebaseapp.com",
    projectId: "myportfolio-bb8f2",
    storageBucket: "myportfolio-bb8f2.appspot.com",
    messagingSenderId: "266363657887",
    appId: "1:266363657887:web:00fc9f76f5ae234e4e8caa",
    measurementId: "G-4VX5CK9ZWP",
    databaseURL: "https://myportfolio-bb8f2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {

    if (user) {
        const uid = user.uid;
        console.log("User is signed in:", user);
        if (window.location.href.includes("index") && user.email == "sjha9563@gmail.com") {
            console.log("You can add project now.");
            document.getElementById("logoutBtn").removeAttribute("hidden");
        } else if (!window.location.href.endsWith("index.html"))
            window.location.href = "index.html";
    } else {
        // User is signed out
        console.log("No user is signed in.");
    }
});
// Logout Functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful
        console.log('User signed out.');
        window.location.href = "index.html";  // Redirect to login page or home page
    }).catch((error) => {
        // An error happened
        console.error('Error signing out:', error);
    });
});
