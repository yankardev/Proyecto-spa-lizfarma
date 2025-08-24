// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoiu9RkLKcjJOECXygkIKtakKnFMB2xOg",
  authDomain: "mi-biblioteca-f75ad.firebaseapp.com",
  projectId: "mi-biblioteca-f75ad",
  storageBucket: "mi-biblioteca-f75ad.firebasestorage.app",
  messagingSenderId: "202059187012",
  appId: "1:202059187012:web:c0957e3a0d0f0cf1308d11",
  measurementId: "G-NNSGY5STMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)