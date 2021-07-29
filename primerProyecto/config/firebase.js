import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBwlS2RQAz9aT4NFJvXhEwRsA5vGDhYl6A",
    authDomain: "ejemploproyecto-f1b89.firebaseapp.com",
    projectId: "ejemploproyecto-f1b89",
    storageBucket: "ejemploproyecto-f1b89.appspot.com",
    messagingSenderId: "158255108343",
    appId: "1:158255108343:web:c4ebe2966697eceeb003f2"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);