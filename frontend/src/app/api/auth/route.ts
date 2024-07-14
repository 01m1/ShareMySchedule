import { NextRequest, NextResponse } from 'next/server';
import { verifyIdToken, adminFirestore } from '../../utils/firebaseAdmin';
import jwt from 'jsonwebtoken';

// Named export for POST method
export async function POST(req: NextRequest, res: NextResponse) {
    

    const { idToken } = await req.json();


    try {
        console.log('Decoding ID token:', idToken);
        const decodedToken = await verifyIdToken(idToken);
        const uid = decodedToken.uid;
        const email = decodedToken.email;
        console.log('Decoded token:', uid, email);
        

        // Check if the user exists in the database
        const userRef = adminFirestore.collection('users').doc(uid);
        const userDoc = await userRef.get();

        let redirectUrl = '/';

        // If the user does not exist, redirect to the registration page
        if (!userDoc.exists) {
            redirectUrl = '/redirectUsername';
        }
        // Else the user does exist, redirect to the dashboard
        
        // Else the ridrect URL is already the HomePage


        // Create a JWT token for session management
        const token = jwt.sign({ decodedToken }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        console.log('Generated JWT token:', token);
        // Set the JWT token in a cookie
        const response  = NextResponse.json({ redirectUrl }, { status: 200 });
        response.cookies.set('token', token, {httpOnly: true, secure: process.env.NODE_ENV === 'development'} );
        console.log('Setting token:', token);  // Debugging line
        const test = response.cookies.get('token');
        console.log('Getting token:', test);  // Debugging line

        
        return response;


    } catch (error) {
        console.error('Error during authentication:', error);
        return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
        
    }
}