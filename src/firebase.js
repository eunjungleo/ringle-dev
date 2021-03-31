import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyCY8iAW-GDbcaSK_MwGhQLfA7HZn8fHA-w",
    authDomain: "ringle-dev-1.firebaseapp.com",
    projectId: "ringle-dev-1",
    storageBucket: "ringle-dev-1.appspot.com",
    messagingSenderId: "505469543643",
    appId: "1:505469543643:web:898a41e7e312373b5d18fe"
});

const db = firebaseApp.firestore();

export { db, firebaseApp };