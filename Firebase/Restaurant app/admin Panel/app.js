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
    // await deleteDoc(doc(db, "users", e));   


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

}
window.updateItem = updateItem;




async function callData() {
    showCase.innerHTML = '';
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {

        showCase.innerHTML += `<div>
    <img src="" alt=""><h1>${doc.data().dish}</h1><h3>${doc.data().price}</h3><button onclick="deleteItem('${doc.id}')">DELETE</button><br><button onclick="updateItem('${doc.id}')" >EDIT</button><br>
</div>`
    });
}










