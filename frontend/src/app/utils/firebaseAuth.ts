import { auth } from '../config/config';  // Adjust the path as necessary
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getUserData } from './firebaseFirestore';
import { get } from 'http';

/**
 * Function to handle signing in with Google using Firebase Authentication.
 * It uses a popup instead of redirect for a better user experience and to avoid issues with third-party cookies.
 */
export function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   if (credential) {
        //       const token = credential.accessToken;
        //       console.log("Access Token:", token);
        //   } else {
        //       console.log("No access token available.");
        //   }

            // The signed-in user info.
            const userEmail = result.user.email;
            const uid = result.user.uid;

            if (userEmail !== null && uid !== null) {
                getUserData(userEmail, uid);
            } else {
                console.log("User email or UID is null.");
            }
            // Perform any follow-up actions after successful login, like routing.
        })
        .catch((error) => {
            console.error("Error during sign in with Google:", error);
        });
}

