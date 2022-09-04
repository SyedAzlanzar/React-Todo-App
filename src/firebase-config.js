import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database'
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Z_45-7QD8xKEBU8hOOtlhOCz0xDf_Sw",
  authDomain: "react-todo-app-d8b09.firebaseapp.com",
  projectId: "react-todo-app-d8b09",
  storageBucket: "react-todo-app-d8b09.appspot.com",
  messagingSenderId: "293780819842",
  appId: "1:293780819842:web:47105b64a901328869499b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const db = getDatabase(app);

 export default auth 

