import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/config";  // Adjust the path as necessary

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return await user.getIdToken();
    } catch (error) {
        console.error("Error during sign in with Google:", error);
        throw error;
    }
}