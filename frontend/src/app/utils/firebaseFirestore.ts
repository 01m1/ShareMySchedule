import { firestore } from '../config/config';  // Adjust path as necessary
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";



// export function getUserData(userEmail, uid){
//     console.log("Getting user data for:", userEmail, uid);
// }



// In this function we are setting redirecting the user to the homepage if they are in the database
// If they are not in the database we will redirect them to the username page to create a username
// export function getUserData(userEmail: string, uid: string) {
