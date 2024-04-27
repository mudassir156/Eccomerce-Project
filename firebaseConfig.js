import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB8rlZ8JO4X44ssYugxVhApQuFbw4a1kDw",
    authDomain: "eccomerce-c1f1a.firebaseapp.com",
    projectId: "eccomerce-c1f1a",
    storageBucket: "eccomerce-c1f1a.appspot.com",
    messagingSenderId: "943182166305",
    appId: "1:943182166305:web:1d9d17dc5c5fdcd84a6660"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB=getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
