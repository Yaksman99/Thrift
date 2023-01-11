// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseApiKey } from './firebase.key';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "thrift-ad078.firebaseapp.com",
  projectId: "thrift-ad078",
  storageBucket: "thrift-ad078.appspot.com",
  messagingSenderId: "949863845838",
  appId: "1:949863845838:web:1d879444d2e93bb900659f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);