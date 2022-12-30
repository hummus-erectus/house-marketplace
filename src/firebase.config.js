import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKSoX6Z0YZ7QFVsD3-55Ak1SRtwVw1fos",
  authDomain: "robs-house-marketplace-app.firebaseapp.com",
  projectId: "robs-house-marketplace-app",
  storageBucket: "robs-house-marketplace-app.appspot.com",
  messagingSenderId: "848138325828",
  appId: "1:848138325828:web:971dca29f8cb4ba3579111"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()