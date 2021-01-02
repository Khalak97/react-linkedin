import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmmY2mWPYXc0B0UOVLLwvYx9rOq4F9feo",
  authDomain: "react-linkedin-de996.firebaseapp.com",
  projectId: "react-linkedin-de996",
  storageBucket: "react-linkedin-de996.appspot.com",
  messagingSenderId: "461125063884",
  appId: "1:461125063884:web:1e9b0179b0be9650cc9e69",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
