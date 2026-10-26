import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPIa3aFXhkHVbybPS3tn4mIKT9LFDnYKQ",
  authDomain: "ahsan-a0a0c.firebaseapp.com",
  projectId: "ahsan-a0a0c",
  storageBucket: "ahsan-a0a0c.firebasestorage.app",
  messagingSenderId: "797357243251",
  appId: "1:797357243251:web:4a3bca1d8cd38f3844e306"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;

// Firebase Storage Image Upload Function
export async function uploadImage(file) {
  if (!file) {
    throw new Error("No image selected.");
  }

  if (!file.type.startsWith("image/")) {
    throw new Error("Please select a valid image file.");
  }

  // Limit size to 10MB
  if (file.size > 10 * 1024 * 1024) {
    throw new Error("Image size must be less than 10MB.");
  }

  try {
    const fileName = `products/${Date.now()}_${file.name}`;
    const imageRef = ref(storage, fileName);

    const snapshot = await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error("Firebase Upload Exception:", error);
    throw new Error(error.message || "Image upload failed due to server error.");
  }
}