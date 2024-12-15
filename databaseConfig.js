// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
// import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app-check.js";

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
// Initialize Firebase services
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

// Reference to messages in the database
const messagesRef = ref(db, 'Contact Data');

document.getElementById('contactForm').addEventListener('submit', submitForm);

async function submitForm(e) {
    e.preventDefault();

    const fileInput = document.getElementById('files');
    const file = fileInput.files[0];

    if (file) {
        const type = "1";
        const fileRef = storageRef(storage, `${type}/${file.name}`);
        await uploadBytes(fileRef, file);

        const downloadURL = await getDownloadURL(fileRef);
        document.getElementById('url').value = downloadURL;

        const name = getInputVal('name');
        const description = getInputVal('description');
        const link = getInputVal('link');

        saveMessage(downloadURL, name, description, link);
        alert('Uploaded successfully');
    } else {
        alert('No file selected');
    }
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(url, name, description, link) {
    const newMessageRef = push(messagesRef);
    set(newMessageRef, {
        name: name,
        url: url,
        description: description,
        projectLink: link
    }).then(() => {
        console.log("Data saved successfully");
        window.location.reload();
    }).catch((error) => {
        console.error("Error saving data:", error);
    });
}

onValue(messagesRef, (snapshot) => {
    const answerDiv = document.getElementById("answer");
    answerDiv.innerHTML = "";
    snapshot.forEach((child) => {
        const childData = child.val();
        const names = childData.name;
        const year = childData.year;
        const description = childData.description;
        const url = childData.url;
        const projectLink = childData.projectLink;
        answerDiv.innerHTML +=
            `<div class="row d-inline">
        <div class="col-sm-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${names}</h5>
              <p class="card-text">${description}</p>
              <p class="card-text"><strong> ${year} </strong></p>
              <div style="margin: 10px;">
                <img src="${url}" alt="Rest API" height="100px" width="100px">
              </div>
              <a href="${projectLink}" target="_blank" class="btn btn-primary">Click To View</a>
            </div>
          </div>
        </div>
      </div>`;
    });
});

function signInCustom() {
    const token = "token123";
    signInWithCustomToken(auth, token)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed in:", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error [${errorCode}]: ${errorMessage}`);
        });
}

