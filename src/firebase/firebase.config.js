// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB069FJsK0C5gePpspoq-WeQtg3UKt3p4U",
  authDomain: "car-auth-b5327.firebaseapp.com",
  projectId: "car-auth-b5327",
  storageBucket: "car-auth-b5327.appspot.com",
  messagingSenderId: "213419275915",
  appId: "1:213419275915:web:1176dc451ff969183c468e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app