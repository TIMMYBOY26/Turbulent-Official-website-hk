import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgWfGYtYMDG1reIrmKcYvDct4vqqBhLIc",
    authDomain: "turbulentofficialwebsitehk.firebaseapp.com",
    projectId: "turbulentofficialwebsitehk",
    storageBucket: "turbulentofficialwebsitehk.appspot.com",
    messagingSenderId: "680496338747",
    appId: "1:680496338747:web:3fcf904d52fddbe98b491e",
    measurementId: "G-MTCLNP3DNS"
};

firebase.initializeApp(firebaseConfig);

export default firebase;