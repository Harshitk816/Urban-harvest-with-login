// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "urban-harvest-a8613.firebaseapp.com",
  projectId: "urban-harvest-a8613",
  storageBucket: "urban-harvest-a8613.appspot.com",
  messagingSenderId: "661822213416",
  appId: "1:661822213416:web:a5fdc9063b861311e6541d",
  measurementId: "G-Y7BZ4ND0TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();