import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";


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
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if (!(email == "admin@gmail.com" && password == "1234567")) {

                window.location.href = '../User page/index.html';// ...
            } else {
                window.location.href = '../admin Panel/index.html';
            }
        })
        .catch((error) => {
            let errorMessage = error.message;
            alert(errorMessage);
        });

})


const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.id;
        console.log("User is signed in");

        location.href = '../admin Panel/index.html';
    }
    else {
        console.log("Not loged in");
    }
})