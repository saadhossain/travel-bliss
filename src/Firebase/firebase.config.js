// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvFA2msiE4S7XlfK9S_ZCBg25hd-49DM8",
  authDomain: "travel-bliss-a621b.firebaseapp.com",
  projectId: "travel-bliss-a621b",
  storageBucket: "travel-bliss-a621b.appspot.com",
  messagingSenderId: "241936305222",
  appId: "1:241936305222:web:321b0d7edf4f16e88b4e47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app