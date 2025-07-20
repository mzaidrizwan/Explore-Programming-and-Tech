import { initializeApp } from "";
import { getFirestore, collection, getDocs, query, orderBy, addDoc, serverTimestamp, doc, updateDoc, deleteField, deleteDoc, onSnapshot } from "";

const ul = document.getElementById("ul");


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const todoCollectionRef = collection(db, "todo");
const q = query(todoCollectionRef, orderBy("time")); // You can add 'desc' for descending order

onSnapshot(q, (querySnapshot) => {
    ul.innerHTML = "";

    querySnapshot.forEach((doc) => {
        ul.innerHTML += `<li>${doc.data().item} 
            <button onclick="deletItem('${doc.id}')">DELETE</button> 
            <button onclick="updateItem('${doc.id}')" >EDIT</button>
        </li>`;
    });
}, (error) => {
    console.error("Error fetching realtime data: ", error);
});

document.getElementById("btn").addEventListener("click", async () => {
    const inp = document.querySelector("input[name='inp']");
    try {
        const docRef = await addDoc(todoCollectionRef, {
            item: inp.value,
            time: serverTimestamp()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.log("Error adding document: ", e);
    }
    inp.value = "";
});

async function deletItem(e) {
    const cityRef = doc(db, "todo", e);
    await deleteDoc(cityRef, {
        item: deleteField(),
        time: deleteField()
    });
}
window.deletItem = deletItem;

async function updateItem(e) {
    let newInp = prompt("Enter new text for the item:");
    if (!newInp) return;

    const cityRef = doc(db, "todo", e);
    await updateDoc(cityRef, {
        item: newInp
    });
}
window.updateItem = updateItem;
