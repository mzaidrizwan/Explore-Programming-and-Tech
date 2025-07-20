import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, deleteDoc, deleteField} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

let showCase = document.getElementById('showItems');
let displayAmount = document.querySelector('h1');
let totalAmount ;
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
   totalAmount = 0;
    displayAmount.innerHTML = '';
    showCase.innerHTML = '';
    const querySnapshot = await getDocs(collection(db, "cart"));
    querySnapshot.forEach((doc) => {
        totalAmount += +(doc.data().price);
        showCase.innerHTML += `<div>
    <img src="${doc.data().pic}" alt=""><h1>${doc.data().dish}</h1><h3>${doc.data().price}</h3><button onclick="buy('${doc.id}')" >Buy</button><br><button onclick="deleteItem('${doc.id}')" >Remove</button>
</div>`
    });
    document.querySelector('h1').innerHTML = "Total Amount :"+totalAmount;
}



async function deleteItem(e) {
    // await deleteDoc(doc(db, "users", e));   


    const cityRef = doc(db, "cart", e);

    await deleteDoc(cityRef, {
        dish: deleteField(),
        pic: deleteField(),
        price: deleteField()

    });

    callData();
}
window.deleteItem = deleteItem;
