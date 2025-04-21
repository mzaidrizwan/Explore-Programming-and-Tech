import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBTwA23-11WleSgRQhSok48rfUGtgVEJes",
    authDomain: "signup-login-239ac.firebaseapp.com",
    projectId: "signup-login-239ac",
    storageBucket: "signup-login-239ac.firebasestorage.app",
    messagingSenderId: "629725184612",
    appId: "1:629725184612:web:8441dc495e0aa50ea01571"
};

const app = initializeApp(firebaseConfig);

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();


    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user; alert("Account Created Successfuly");
             window.location.href = './Login/index.html';// ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; alert(errorMessage);
            // ..
        });

})