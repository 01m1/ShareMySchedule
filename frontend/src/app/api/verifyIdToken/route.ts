import { NextRequest, NextResponse } from 'next/server';
import { verifyIdToken } from '../../utils/firebaseAdmin';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    const { token } = await req.json();
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        return NextResponse.json(decoded);
        
    } catch (error) {
        console.error('Error during verification:', error);
        return NextResponse.json({ error: 'Verification failed' }, { status: 401 });
        
    }
}
