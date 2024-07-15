import { NextRequest, NextResponse } from 'next/server';
import { adminFirestore } from '@/app/utils/firebaseAdmin'; // Adjust the path as necessary

export async function POST(req: NextRequest) {
  try {
    const { username } = await req.json();

    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    console.log("Checking username:", username);
    const usersRef = adminFirestore.collection('users');
    const snapshot = await usersRef.where('username', '==', username).get();

    if (!snapshot.empty) {
      return NextResponse.json({ exists: true });
    } else {
      return NextResponse.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking username:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
