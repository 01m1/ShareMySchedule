'use client'; // marks the component as a client component

import React from 'react'
import Image from 'next/image'
import logo from '../../../../images/icons8-coffee-pot-16.png'
import {motion} from 'framer-motion'
import { signInWithGoogle } from '@/app/utils/firebaseAuth';
import { useRouter } from 'next/navigation';
import nookies from 'nookies';
import {parseCookies} from 'nookies';
import { cookies } from 'next/headers';




function LoginNavbar(){
  const router = useRouter();


  async function handleLogin() {
    try {
        const idToken = await signInWithGoogle();
        const response = await fetch("/api/auth", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idToken }),
        });

        if(response.ok){
          const data = await response.json();
          router.push(data.redirectUrl);

         


          // router.push(data.redirectUrl);
          
          

          
          
          // Since the data is the redirect URL, we can use the router to navigate to the page
          
          
        }

        
    } catch (error) {
        console.error('Login Failed:', error);
    }
}

  return (
    <div className='flex justify-between p-6 bg-black h-24'>
      <div className='flex items-center gap-2'>
        <div className=''>
        <Image src={logo} alt='idk' width={50} height={50}></Image>
        </div>
        <h1 className='text-2xl font-bold text-white'>Share My Schedule</h1>
      </div>

      <button onClick={handleLogin} className='bg-gradient-to-r from-darkest-purple to-light-purple text-white font-bold px-6 transition duration-500 ease-in-out hover:bg-blue-600 hover:rounded-full   ' >
      Sign in
      </button>

      
    </div>
  )
}


export default LoginNavbar
