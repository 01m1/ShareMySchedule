// src/app/api/verifyToken/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';

export async function GET(req: NextRequest) {
    try {
        const cookieHeader = req.headers.get('cookie');
        console.log('Cookie header:', cookieHeader);
        if (!cookieHeader) {
            return NextResponse.json({ error: 'No cookies found' }, { status: 401 });
        }

        const cookies = parse(cookieHeader);
        const token = cookies.token;
        console.log('Token:', token);

        if (!token) {
            return NextResponse.json({ error: 'No token found' }, { status: 401 });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        console.log('Decoded token:', decoded);
        
        const { uid, email } = (decoded as any).decodedToken;
        console.log('UID:', uid, 'Email:', email);

        return NextResponse.json({ uid, email });

        
    } catch (error) {
        console.error('Token verification failed:', error);
        return NextResponse.json({ error: 'Token verification failed' }, { status: 401 });
    }
}
