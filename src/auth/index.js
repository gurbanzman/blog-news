// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlZ5gpmueaEe5dQEDFc3j_NGjqfFiPl_U",
  authDomain: "user-f5fae.firebaseapp.com",
  projectId: "user-f5fae",
  storageBucket: "user-f5fae.appspot.com",
  messagingSenderId: "84142794242",
  appId: "1:84142794242:web:b111c81d0e2a5cc549a91b",
  measurementId: "G-YL1T68XXST",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, analytics };
