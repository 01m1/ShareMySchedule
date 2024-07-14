import admin from 'firebase-admin';

// Initialize Firebase Admin
if (!admin.apps.length) {
    const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;
    if (!firebasePrivateKey) {
        throw new Error('The Firebase private key is not set in environment variables.');
    }
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,  
            privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,  
        })
    });

}

export const verifyIdToken = (token: string) => {
    return admin.auth().verifyIdToken(token);
}

export const adminFirestore = admin.firestore();