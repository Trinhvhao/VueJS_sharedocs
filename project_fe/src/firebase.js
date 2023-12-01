// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsm4rMAjtMJRWsATLot5Y5kRYnn70PrHo",
  authDomain: "sharedocs-293bb.firebaseapp.com",
  projectId: "sharedocs-293bb",
  storageBucket: "sharedocs-293bb.appspot.com",
  messagingSenderId: "42006519083",
  appId: "1:42006519083:web:19e5f94cc6b7df4846f96e",
  measurementId: "G-B97J49EFWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getStorage } from "firebase/storage";
const storage = getStorage(app);

export { storage }