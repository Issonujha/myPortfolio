// script.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
    const loginErrorMessage = document.getElementById('login-error-message');
    const signupErrorMessage = document.getElementById('signup-error-message');

    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("User is signed in:", user);
        window.location.href = "index.html";
        // You can redirect the user to another page or update the UI
        loginErrorMessage.textContent = "Already logged in!";
        loginErrorMessage.style.color = "green";
        signupErrorMessage.textContent = "Already logged in!";
        signupErrorMessage.style.color = "green";
    } else {
        // User is signed out
        console.log("No user is signed in.");
    }
});

// Login Functionality
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('login-error-message');

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            errorMessage.textContent = "Login successful!";
            errorMessage.style.color = "green";
            console.log("User logged in:", user);
            // Redirect to another page or perform other actions
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            errorMessage.textContent = `Error: ${errorMsg}`;
            errorMessage.style.color = "red";
            console.error("Error logging in:", errorCode, errorMsg);
        });
});

// Signup Functionality
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const errorMessage = document.getElementById('signup-error-message');

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            errorMessage.textContent = "Signup successful!";
            errorMessage.style.color = "green";
            console.log("User signed up:", user);
            // Redirect to another page or perform other actions
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            errorMessage.textContent = `Error: ${errorMsg}`;
            errorMessage.style.color = "red";
            console.error("Error signing up:", errorCode, errorMsg);
        });
});
