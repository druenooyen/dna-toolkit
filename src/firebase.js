// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8EfvlsuEk2dIncjCpMLFILONgq_f20T0",
  authDomain: "dna-toolkit.firebaseapp.com",
  projectId: "dna-toolkit",
  storageBucket: "dna-toolkit.firebasestorage.app",
  messagingSenderId: "568706797673",
  appId: "1:568706797673:web:ee36b1376400ac17e092f8",
  measurementId: "G-G4Q7VRTKRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);