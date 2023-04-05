// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK1hPRiUkIbBGzTg-OfcLWuzeQMnEFi6U",
  authDomain: "career-fusion.firebaseapp.com",
  projectId: "career-fusion",
  storageBucket: "career-fusion.appspot.com",
  messagingSenderId: "1077237120925",
  appId: "1:1077237120925:web:02f68a6057244393e0b974",
  measurementId: "G-BF2VTGSNS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);