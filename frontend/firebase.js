// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delievery.firebaseapp.com",
  projectId: "vingo-food-delievery",
  storageBucket: "vingo-food-delievery.firebasestorage.app",
  messagingSenderId: "652081925954",
  appId: "1:652081925954:web:cec190e83082a152d282db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
