// script.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

    if (user) {
        const uid = user.uid;
        console.log("User is signed in:", user);
        if (window.location.href.includes("projects") && user.email == "sjha9563@gmail.com") {
            console.log("You can add project now.");
            document.getElementById("afterLogin").removeAttribute("hidden");
        } else if (window.location.href.endsWith("login.html") || window.location.href.endsWith("signup.html"))
            window.location.href = "index.html";
    } else {
        // User is signed out
        console.log("No user is signed in.");
    }
});
if (!window.location.href.includes("projects")) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                errorMessage.textContent = "Login successful!";
                errorMessage.style.color = "green";
                window.location.href = window.location.href.replace("/login", "/index");
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
}