// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApEM-v3Gt0dF2ED89uAOvHX0N2CDeu6R0",
  authDomain: "fir-bbe2f.firebaseapp.com",
  projectId: "fir-bbe2f",
  storageBucket: "fir-bbe2f.appspot.com",
  messagingSenderId: "1063485132372",
  appId: "1:1063485132372:web:837804f3e17af5b91167c1",
  measurementId: "G-Z8SWWR1C92"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };