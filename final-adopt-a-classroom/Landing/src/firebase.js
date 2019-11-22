import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBPCHfh2W13zqFySdx5Q6VzC6P3-bMAEl8",
  authDomain: "adoptaclassroom-54d87.firebaseapp.com",
  databaseURL: "https://adoptaclassroom-54d87.firebaseio.com",
  projectId: "adoptaclassroom-54d87",
  storageBucket: "adoptaclassroom-54d87.appspot.com",
  messagingSenderId: "857635720340",
  appId: "1:857635720340:web:825a091e882472527cb881",
  measurementId: "G-86ME9S3KWV"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
