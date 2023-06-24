// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdy2WhIgn_HG8jrvXoExC2cppZrXWZtMU",
  authDomain: "fullstackapp-a2119.firebaseapp.com",
  projectId: "fullstackapp-a2119",
  storageBucket: "fullstackapp-a2119.appspot.com",
  messagingSenderId: "382719764274",
  appId: "1:382719764274:web:d04fd0ac489a7ec751192b",
  measurementId: "G-KYSTF0Z2QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);