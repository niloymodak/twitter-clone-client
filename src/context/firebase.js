// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCU4xHphVymnz0gwVqnhIQZqxiT1ygjF78",
    authDomain: "clone-twitter-63e31.firebaseapp.com",
    projectId: "clone-twitter-63e31",
    storageBucket: "clone-twitter-63e31.appspot.com",
    messagingSenderId: "851658325054",
    appId: "1:851658325054:web:14aab4961434705699a56f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;