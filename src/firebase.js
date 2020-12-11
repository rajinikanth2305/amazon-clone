// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnvOELrSkyd3_0aytPCuamv71vx23Xm2c",
  authDomain: "fir-b537c.firebaseapp.com",
  projectId: "fir-b537c",
  storageBucket: "fir-b537c.appspot.com",
  messagingSenderId: "541723241662",
  appId: "1:541723241662:web:1b5678f6b220d1509582ef",
  measurementId: "G-Y3N48LGBWD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
