// src/app/utils/firebaseAuth.js
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../config/config"; // Ensure correct import path

export function signInWithGoogle() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // Handle user and token as needed, maybe set user context or redirect
    })
    .catch((error) => {
      // Handle Errors here.
      console.error("Authentication error:", error);
    });
}
