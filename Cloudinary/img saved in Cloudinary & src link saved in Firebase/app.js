import { initializeApp } from "";// personal api links
import { getFirestore, collection, addDoc } from ""; //personal api links

const firebaseConfig = {
    //personal api links
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const CLOUD_NAME = ''; //personal account code
const UPLOAD_PRESET = ''; //personal Preset Name

document.getElementById('uploadBtn').addEventListener('click', async () => {

    let file = document.getElementById('fileInput').files[0];
    let previewImg = document.getElementById('preview');

    if (!file) {
        alert('Select a file first');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);


    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData
        });


        if (!response.ok) throw new Error(`Upload failed: ${response.statusText}`);

        const data = await response.json();
        console.log('Upload success! data', data);
       
        //========upload to database============
        try {
            const docRef = await addDoc(collection(db, "images"), {
                imgSrc: data.secure_url
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        // previewImg.src = data.secure_url;

    } catch (err) {
        console.log(err);
        alert('Upload error');
    }
});
