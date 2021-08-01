// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHesLSNlykL2-wY42AUX7wXTmS6fN5awg",
  authDomain: "challenge-6874e.firebaseapp.com",
  projectId: "challenge-6874e",
  storageBucket: "challenge-6874e.appspot.com",
  messagingSenderId: "904161321627",
  appId: "1:904161321627:web:f90a552f86ca904bf45c3e",
  measurementId: "G-HJ1VN8RCJC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
