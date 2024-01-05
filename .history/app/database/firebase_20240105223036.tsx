// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_YlEdsWv5eSskXp3pIzhGLTYQrAuA6to",
  authDomain: "mynextwebapp.firebaseapp.com",
  projectId: "mynextwebapp",
  storageBucket: "mynextwebapp.appspot.com",
  messagingSenderId: "226046345945",
  appId: "1:226046345945:web:29707c3bd8aa13db1bb4c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
