import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCmkZP7s7oN4cyhmuGNbHTIeosfwpduExo",
    authDomain: "turbulent-official.firebaseapp.com",
    projectId: "turbulent-official",
    storageBucket: "turbulent-official.appspot.com",
    messagingSenderId: "459159835846",
    appId: "1:459159835846:web:c9862159716c400eefb3c7",
    measurementId: "G-1Q656V2HCQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);