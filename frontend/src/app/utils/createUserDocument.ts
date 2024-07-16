import { adminFirestore } from "./firebaseAdmin";

interface User {
    email: string;
    uid: string;
    username: string;
}


export async function createUserDocument(updatedUser: User){
    if(!updatedUser.uid) return;

    const useRef = adminFirestore.doc(`users/${updatedUser.uid}`);
    await useRef.set({
        email: updatedUser.email,
        username: updatedUser.username,
        
    })




}