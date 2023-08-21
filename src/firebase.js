// firebase.js
import firebase from "firebase/app";
import "firebase/auth"; // Import the authentication module if needed
import "firebase/firestore"; // Import other Firebase modules if needed

const firebaseConfig = {
  apiKey: "AIzaSyAVaLGKcE2R3FD91CpDYECgCPLU0bGEOE0",
  authDomain: "property247-954ca.firebaseapp.com",
  projectId: "property247-954ca",
  storageBucket: "property247-954ca.appspot.com",
  messagingSenderId: "38697153290",
  appId: "1:38697153290:web:2e94f1507c0f5162d6c0f3",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
