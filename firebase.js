// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getDatabase} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC993APyt5N_NSVk3DLde7h-bCCA1QguVk",
  authDomain: "trinite-bite.firebaseapp.com",
  projectId: "trinite-bite",
  storageBucket: "trinite-bite.appspot.com",
  messagingSenderId: "599554102882",
  appId: "1:599554102882:web:9c8807e4aadc4bbd9c233b",
  measurementId: "G-VXW43TDWCK",
  databaseURL: "https://trinite-bite-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const db = getDatabase(app)
const auth = firebase.auth()

export{auth, db};