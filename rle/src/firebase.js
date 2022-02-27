// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNOnq85sEc_IzSQPYvolTKL0P7qbQbkqg",
  authDomain: "run-length-encoder.firebaseapp.com",
  projectId: "run-length-encoder",
  storageBucket: "run-length-encoder.appspot.com",
  messagingSenderId: "565522359232",
  appId: "1:565522359232:web:789f84a6c9403d03b61e25",
  measurementId: "G-6KV5JKEV3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);