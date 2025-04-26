import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, deleteField, updateDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

import { getAuth,signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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
const auth = getAuth(app);


document.addEventListener('DOMContentLoaded', async () => {
    try {
        await callData();
    } catch (error) {
        console.log('Error occurred:', error);
    }
});


document.getElementById('new_Hotel').addEventListener('click', async function () {
    let dishName = prompt();
    let dishPicture = prompt();
    let dishPrice = prompt();

    if (dishName && dishPicture && dishPrice) {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                dish: dishName,
                pic: dishPicture,
                price: dishPrice
            });
            alert("Item added Successfuly")
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        callData();
    }
})


async function deleteItem(e) {

    const cityRef = doc(db, "users", e);
    await deleteDoc(cityRef, {
        dish: deleteField(),
        pic: deleteField(),
        price: deleteField()
    });
    callData();
}
window.deleteItem = deleteItem;


async function updateItem(e) {
    let dish2 = prompt();
    let pic2 = prompt();
    let price2 = prompt();
    if (!dish2 || !pic2 || !price2) return;

    const cityRef = doc(db, "users", e);
    await updateDoc(cityRef, {
        dish: dish2,
        pic: pic2,
        price: price2
    }); callData()

}window.updateItem = updateItem;




async function callData() {
    showCase.innerHTML = '';
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {

        showCase.innerHTML +=`<div class="card">
        <img src="${doc.data().pic}" alt="Dish image">
        <div class="card-body">
          <h2>${doc.data().dish}</h2>
          <p>Price: ${doc.data().price}</p>
          <div class="card-actions">
          <button class="btn btn-primary" onclick="updateItem('${doc.id}')">Edit</button>
          <button class="btn btn-secondary" onclick="deleteItem('${doc.id}')">Delete</button>
          </div>
        </div>
      </div>` 
    });
}


document.getElementById('logOut').addEventListener('click',()=>{
    signOut(auth)
    .then(() => {
      console.log('User successfully signed out.');
      alert("Log Out Successfuly");
      window.location.href = '../Login/index.html';
    })
    .catch(error => {
      console.log('Error signing out:', error);
    });
})







