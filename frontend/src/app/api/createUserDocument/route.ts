import { NextRequest, NextResponse } from 'next/server';
import { createUserDocument } from '@/app/utils/createUserDocument';

export async function POST(req: NextRequest) {
  try {
    const { updatedUser } = await req.json();

    if (!updatedUser || !updatedUser.uid || !updatedUser.email || !updatedUser.username) {
        return NextResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

    await createUserDocument(updatedUser);

    return NextResponse.json({ message: 'User document created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error creating user document:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
