// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxCUTBnhIwoynz_qLrz7PkcZuPSTwMZDk",
  authDomain: "sports-mans-warehouse.firebaseapp.com",
  projectId: "sports-mans-warehouse",
  storageBucket: "sports-mans-warehouse.appspot.com",
  messagingSenderId: "17535699535",
  appId: "1:17535699535:web:e5bb43ebb8aa9779e6783a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;