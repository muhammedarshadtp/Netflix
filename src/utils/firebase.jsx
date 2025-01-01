// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_xMbtuC4Rgm4dSs16YzggK2cVHCC-fwM",
  authDomain: "netflix-b9b36.firebaseapp.com",
  projectId: "netflix-b9b36",
  storageBucket: "netflix-b9b36.firebasestorage.app",
  messagingSenderId: "545154880066",
  appId: "1:545154880066:web:504988c89f1aee9a1e13db",
  measurementId: "G-X6BLSP17SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()