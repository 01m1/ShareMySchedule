import { adminFirestore } from "./firebaseAdmin";

interface User {
    email: string;
    uid: string;
    username: string;
}


export async function createUserDocument(user: User){
    if(!user.uid) return;

    const useRef = adminFirestore.doc(`users/${user.uid}`);
    await useRef.set({
        email: user.email,
        username: user.username,
        
    })




}