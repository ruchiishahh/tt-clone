import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ000XiZC-8zvZ2vPb0PuLpI6PkynMbG0",
  authDomain: "tik-tok-clone-17ff7.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-17ff7.firebaseio.com",
  projectId: "tik-tok-clone-17ff7",
  storageBucket: "tik-tok-clone-17ff7.appspot.com",
  messagingSenderId: "156753093858",
  appId: "1:156753093858:web:d0bace180cbdc3f7676abb",
  measurementId: "G-QNWYYF6WKC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
