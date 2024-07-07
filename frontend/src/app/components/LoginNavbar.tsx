
import React from 'react'
import Image from 'next/image'
import logo from '../../../images/icons8-coffee-pot-16.png'

function LoginNavbar({google}: {google: () => void}){
  return (
    <div className='flex justify-between'>
      <div className='flex items-center'>
        <div>
        <Image src={logo} alt='idk' width={50} height={50}></Image>
        </div>
        <h1 className='text-2xl font-bold'>Share My Schedule</h1>
      </div>
      <div>
        <button onClick={google} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
          Sign in
        </button>
      </div>
      
    </div>
  )
}


export default LoginNavbar
