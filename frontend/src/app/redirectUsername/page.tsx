"use client"; // marks the component as a client component
import nookies from 'nookies';
import React from 'react'
import {getUserData} from '@/app/utils/firebaseFirestore'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// I want to get passed into here the user email and UID then 
// user will create a username
// We will take all the username, email, and UID and store it in the database
// Then we will redirect to the homepage



interface User {
  email: string;
  uid: string;
  // include other user properties as needed
}


function FormPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUserData() {
        try {
            const response = await fetch("/api/user", {
                method: 'GET',

            });

            if (response.ok) {
                const data = await response.json();
                console.log("User data:", data);
                setUser(data);
            } else {
                console.error("Failed to get user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    fetchUserData();
}, []);







  return (
    <div className='h-screen flex justify-center items-center'>

        <h1 className='h-[400px] w-[400px] flex items-center justify-center font-extrabold text-6xl '> Form Page</h1>
          {user && <p>{user.email}</p>}

    </div>
  )
}

export default FormPage
