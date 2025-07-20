import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, deleteField, updateDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

let showCase = document.getElementById('showItems');

const firebaseConfig = {
    apiKey: "AIzaSyBTwA23-11WleSgRQhSok48rfUGtgVEJes",
    authDomain: "signup-login-239ac.firebaseapp.com",
    projectId: "signup-login-239ac",
    storageBucket: "signup-login-239ac.firebasestorage.app",
    messagingSenderId: "629725184612",
    appId: "1:629725184612:web:8441dc495e0aa50ea01571"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



document.addEventListener('DOMContentLoaded', async () => {
    try {
        await callData();
    } catch (error) {
        console.log('Error occurred:', error);
    }
});


async function callData() {
    showCase.innerHTML = '';
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {

        showCase.innerHTML += `<div>
    <img src="${doc.data().pic}" alt=""><h1>${doc.data().dish}</h1><h3>${doc.data().price}</h3><button onclick="buy('${doc.id}')" >Buy</button><br> <button onclick="addToCart('${doc.id}', '${doc.data().dish}', '${doc.data().pic}', '${doc.data().price}')" >Add To Cart</button>
</div>`
    });
}


async function addToCart(e, f, g, h) {
    console.error(e);

    try {
        const docRef = await addDoc(collection(db, "cart"), {
            p_id: e,
            dish: f,
            pic: g,
            price: h
        });
        console.log("Added to Cart with ID: ", docRef.id);
    } catch (e) {
        console.log("Error adding To Cart, document: ", e);
    }
alert("Item added in Cart")
} window.addToCart = addToCart;


document.getElementById('cartBtn').addEventListener('click',()=>{
    window.location.href = '../Cart/index.html';
})