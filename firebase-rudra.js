// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7fvXM7gl0CUOggAec7CIDObnjGa-1vxM",
  authDomain: "fir-auth-89c1f.firebaseapp.com",
  projectId: "fir-auth-89c1f",
  storageBucket: "fir-auth-89c1f.appspot.com",
  messagingSenderId: "12539197678",
  appId: "1:12539197678:web:91308b7cff9d4bc334dbff",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
