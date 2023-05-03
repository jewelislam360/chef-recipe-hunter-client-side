// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5i8dXQeLWJX9hddADBTjHGZPFu41BJTg",
  authDomain: "chef-recipe-hunter-clien-e496f.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-e496f",
  storageBucket: "chef-recipe-hunter-clien-e496f.appspot.com",
  messagingSenderId: "194786512690",
  appId: "1:194786512690:web:bcb23a5fbc0ed6ac27512b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;