// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlTgZ-GKL1X1GjCFO_cL8LnOIb6-ackak",
  authDomain: "ben-pham-pantry-tracker.firebaseapp.com",
  projectId: "ben-pham-pantry-tracker",
  storageBucket: "ben-pham-pantry-tracker.appspot.com",
  messagingSenderId: "68011174395",
  appId: "1:68011174395:web:f182b8991633e3e2d6835e",
  measurementId: "G-J7LCYJCDH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {
    app, firebaseConfig
}