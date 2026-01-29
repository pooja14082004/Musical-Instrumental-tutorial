// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_AUgimHRBmV79f9yF3Fw8fEJMSRgkdIs",
  authDomain: "student-upload-420b1.firebaseapp.com",
  projectId: "student-upload-420b1",
  storageBucket: "student-upload-420b1.firebasestorage.app",
  messagingSenderId: "492711500805",
  appId: "1:492711500805:web:941d2ab92c932f9499d06c",
  measurementId: "G-DCQDERQEQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth=getAnalytics(app);

