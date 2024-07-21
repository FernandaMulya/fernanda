// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfZkEvYaELaqB9VcVfe2ZlWshCvQZaECc",
  authDomain: "store-tutorial-8d974.firebaseapp.com",
  projectId: "store-tutorial-8d974",
  storageBucket: "store-tutorial-8d974.appspot.com",
  messagingSenderId: "779627811401",
  appId: "1:779627811401:web:3e3dc90bc01fb87565a598",
  measurementId: "G-0ZJXT7JDFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);