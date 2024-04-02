// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL3E_w1gaR_qaXIw-etd1vVQYbBTctPKs",
    authDomain: "evac-77db5.firebaseapp.com",
    projectId: "evac-77db5",
    storageBucket: "evac-77db5.appspot.com",
    messagingSenderId: "832522615412",
    appId: "1:832522615412:web:57d363bc5a2422fb816f21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()

export { auth, db }