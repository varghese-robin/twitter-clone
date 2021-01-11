import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmWz15P_b0FIvMBndmJvSy4ao8Bz7kmMA",
  authDomain: "twitter-clone-c4f03.firebaseapp.com",
  projectId: "twitter-clone-c4f03",
  storageBucket: "twitter-clone-c4f03.appspot.com",
  messagingSenderId: "25498941255",
  appId: "1:25498941255:web:59cb9c5a4a6725510ebe62"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;