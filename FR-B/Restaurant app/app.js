import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBTwA23-11WleSgRQhSok48rfUGtgVEJes",
    authDomain: "signup-login-239ac.firebaseapp.com",
    projectId: "signup-login-239ac",
    storageBucket: "signup-login-239ac.firebasestorage.app",
    messagingSenderId: "629725184612",
    appId: "1:629725184612:web:8441dc495e0aa50ea01571"
};



const app = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

document.querySelector('button').addEventListener('click',async (event) => {
    event.preventDefault();

    const email    = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // 1. Create the user in Firebase Auth
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    // 2. Grab the generated UID
    const firebaseUid = user.uid;                   // e.g. "X8aK3…Zy"

    // 3. Append "main" to form your custom ID
    const customUserId = `${firebaseUid}main`;      // e.g. "X8aK3…Zymain"
    console.log("Custom User ID:", customUserId);

    // 4. Persist that in Firestore under "users" collection
    await setDoc(
      doc(db, "users", customUserId),
      {
        email:     user.email,
        createdAt: new Date().toISOString(),
        // …any other profile fields…
      }
    );

    alert("Account created successfully!");
    window.location.href = './User page/index.html';

  } catch (error) {
    console.error("Sign-up error:", error.code, error.message);
    alert("Error occurred when signing up: " + error.message);
  }

})


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.id;
        console.log(2, uid);

        console.log("User is signed in");

        location.href = './admin Panel/index.html';
    }
    else {
        console.log("Not loged in");
    }
})