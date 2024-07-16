// src/app/api/verifyToken/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';
import { adminFirestore } from '@/app/utils/firebaseAdmin';

export async function GET(req: NextRequest) {
    try {
        const cookieHeader = req.headers.get('cookie');
        if (!cookieHeader) {
            return NextResponse.json({ error: 'No cookies found' }, { status: 401 });
        }

        const cookies = parse(cookieHeader);
        const token = cookies.token;

        if (!token) {
            return NextResponse.json({ error: 'No token found' }, { status: 401 });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        
        const { uid, email } = (decoded as any).decodedToken;

        


        const userRef = adminFirestore.collection('users').doc(uid);
        const userDoc = await userRef.get();


        // if the user has a username, that means they have completed the registration process
        if (userDoc.exists) {
            const username = userDoc.data()?.username;
            return NextResponse.json({ uid, email, username });
            // otherwise send to the form page to complete registration
        } else {
            return NextResponse.json({ uid, email });
        }

        
    } catch (error) {
        console.error('Token verification failed:', error);
        return NextResponse.json({ error: 'Token verification failed' }, { status: 401 });
    }
}
