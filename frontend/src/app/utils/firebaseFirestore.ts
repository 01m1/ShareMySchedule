import { firestore } from '../config/config';  // Adjust path as necessary
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from 'next/router';

// export function getUserData(userEmail, uid){
//     console.log("Getting user data for:", userEmail, uid);
// }



// In this function we are setting redirecting the user to the homepage if they are in the database
// If they are not in the database we will redirect them to the username page to create a username
export function getUserData(userEmail: string, uid: string) {
    const colRef = doc(firestore, "users", uid);
    getDoc(colRef)
        .then((doc) => {
            if (doc.exists()) {
                // Redirect to homepage
                const router = useRouter();
                router.push('/');
                console.log("Document data:", doc.data());
            } else {
                // Redirect to username page with the email and uid
                const router = useRouter();
                
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.error("Error getting document:", error);
        });
}