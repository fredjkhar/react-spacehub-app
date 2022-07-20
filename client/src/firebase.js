// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM0RQs8upnSZrAc_NfoSoFlxDaTK9RGRM",
  authDomain: "spacehub-d9dd5.firebaseapp.com",
  projectId: "spacehub-d9dd5",
  storageBucket: "spacehub-d9dd5.appspot.com",
  messagingSenderId: "892862149644",
  appId: "1:892862149644:web:bd99ef63a845fec425aa29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app