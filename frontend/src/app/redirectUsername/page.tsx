import React from 'react'
import {getUserData} from '@/app/utils/firebaseFirestore'

// I want to get passed into here the user email and UID then 
// user will create a username
// We will take all the username, email, and UID and store it in the database
// Then we will redirect to the homepage

function FormPage() {
  return (
    <div className='h-screen flex justify-center items-center'>

        <h1 className='h-[400px] w-[400px] flex items-center justify-center font-extrabold text-6xl '>Form Page</h1>

    </div>
  )
}

export default FormPage
