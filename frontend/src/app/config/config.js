import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase, authenticaltion, and Firestore
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);


// Collection from Firestore
const colRef = collection(firestore, "users");

// Get the collection reference
getDocs(colRef)
.then((snapshot) => {
  // creating our own array of users
  let users = [];

  // Loop through each document and add the id and data to the users array
  // the data() method returns an object with all the fields of the document
  snapshot.forEach((doc) => { 
    users.push({
      id: doc.id,
      ...doc.data()
    
    })
  });

})
.catch((error) => {
  console.error("Error getting documents: ", error);
});




export { app, auth, firestore };