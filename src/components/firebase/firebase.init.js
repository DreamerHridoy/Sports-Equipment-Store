// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG2tqE99M38opzOoLhliodTw-ia-vMeZI",
  authDomain: "sports-equipment-ba8eb.firebaseapp.com",
  projectId: "sports-equipment-ba8eb",
  storageBucket: "sports-equipment-ba8eb.firebasestorage.app",
  messagingSenderId: "147918687454",
  appId: "1:147918687454:web:e4b63d4a8dcd6e669d864f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
