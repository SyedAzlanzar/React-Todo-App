import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  // apikey hidden
  authDomain: "react-todo-app-d8b09.firebaseapp.com",
  projectId: "react-todo-app-d8b09",
  storageBucket: "react-todo-app-d8b09.appspot.com",
  messagingSenderId: "293780819842",
  appId: "1:293780819842:web:47105b64a901328869499b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 export default auth

