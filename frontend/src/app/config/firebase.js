// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyChWWDKpzwWsQM6Ax6I4CrhJkEUW22s6yA",

  authDomain: "sharemyschedule-47f52.firebaseapp.com",

  projectId: "sharemyschedule-47f52",

  storageBucket: "sharemyschedule-47f52.appspot.com",

  messagingSenderId: "514895809705",

  appId: "1:514895809705:web:391fbe3f32f2bd380a6db8",

  measurementId: "G-YY59DDK5SQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);