import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAb34c4ZFxQK8ysZ9SdXUvYFd7gMNKbvo8",
    authDomain: "somativa2-836c4.firebaseapp.com",
    projectId: "somativa2-836c4",
    storageBucket: "somativa2-836c4.appspot.com",
    messagingSenderId: "320208069998",
    appId: "1:320208069998:web:840fe4fa77e6d56cd1cd7f",
    measurementId: "G-HQ4TBHMHXJ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
