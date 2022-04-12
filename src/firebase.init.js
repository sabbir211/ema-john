// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbDNrt6tMl3WlIXgNMP0Crqevmxu9Vi-0",
  authDomain: "ema-john-8cf32.firebaseapp.com",
  projectId: "ema-john-8cf32",
  storageBucket: "ema-john-8cf32.appspot.com",
  messagingSenderId: "248659494348",
  appId: "1:248659494348:web:f188d6ff59c7401e064969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;