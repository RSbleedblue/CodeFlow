// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVOfxT84JqM8Vuk3um8VnaDde9DDls9Aw",
  authDomain: "codeflow-6d6bb.firebaseapp.com",
  projectId: "codeflow-6d6bb",
  storageBucket: "codeflow-6d6bb.appspot.com",
  messagingSenderId: "19353276537",
  appId: "1:19353276537:web:50e8c0454863d2179684a8",
  measurementId: "G-Y9LL1HZ6B9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db};