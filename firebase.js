import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPIa3aFXhkHVbybPS3tn4mIKT9LFDnYKQ",
  authDomain: "ahsan-a0a0c.firebaseapp.com",
  projectId: "ahsan-a0a0c",
  storageBucket: "ahsan-a0a0c.firebasestorage.app",
  messagingSenderId: "797357243251",
  appId: "1:797357243251:web:4a3bca1d8cd38f3844e306"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();