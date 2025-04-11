import { initializeApp } from "";//authentication link here in quotations --> ""
import { getFirestore, collection, getDocs, query, orderBy, addDoc, serverTimestamp } from "";//authentication link here in "",at last of link type -firestore.js

const ul = document.getElementById("ul");

const firebaseConfig = {
//Configuration keys from your Firebase account
    apiKey: "AIzaSyB6RhEK433z3cPfXA1PnBKCKkrVb-2i9ug",
    authDomain: "database-basic-33625.firebaseapp.com",
    projectId: "database-basic-33625",
    storageBucket: "database-basic-33625.firebasestorage.app",
    messagingSenderId: "591813824225",
    appId: "1:591813824225:web:a10d12a72f7f821b7a71a0",
    measurementId: "G-9MMTLVTCY4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("btn").addEventListener("click", async () => {
    let inp = document.querySelector("input[name='inp']");
    try {
        const docRef = await addDoc(collection(db, "todo"), {
            item: inp.value,
            time: serverTimestamp() 
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    
    callData();
});

async function callData() {
    ul.innerHTML = "";
    const q = query(collection(db, "todo"), orderBy("time")); //AGAR DECENDING ORDER ME ITEM LISTING CHAHYE TO:orderBy("time", "desc") LIKHEN GY. 
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // console.log(doc.data()); 
        ul.innerHTML += `<li>${doc.data().item}</li>`;
    });
}callData();


