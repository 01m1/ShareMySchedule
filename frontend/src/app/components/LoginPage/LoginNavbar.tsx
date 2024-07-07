
import React from 'react'
import Image from 'next/image'
import logo from '../../../../images/icons8-coffee-pot-16.png'
import {motion} from 'framer-motion'

function LoginNavbar({google}: {google: () => void}){
  return (
    <div className='flex justify-between p-6 bg-black h-24'>
      <div className='flex items-center gap-2'>
        <div className=''>
        <Image src={logo} alt='idk' width={50} height={50}></Image>
        </div>
        <h1 className='text-2xl font-bold text-white'>Share My Schedule</h1>
      </div>

      <button onClick={google} className='bg-gradient-to-r from-darkest-purple to-light-purple text-white font-bold px-6 transition duration-500 ease-in-out hover:bg-blue-600 hover:rounded-full   ' >
      Sign in
      </button>

      
    </div>
  )
}


export default LoginNavbar
