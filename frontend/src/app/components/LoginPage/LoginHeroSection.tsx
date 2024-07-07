import React from 'react'
import Typed, { ReactTyped } from 'react-typed';

function LoginHeroSection() {
  return (
    <main className='h-[90vh] flex justify-center items-center bg-black'>
      <div className=" w-[900px] h-[500px]">
        <h1 className='flex flex-col items-center justify-center h-full w-full text-5xl font-semibold text-light-purple'> 
        <ReactTyped
                    strings={[
                        'Find the perfect time to meet.',
                        'Sync your schedules effortlessly.',
                        'Connect and collaborate with ease.',
                        'Plan better, do more together.',
                        'See when your friends are free.'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
          
           </h1>
      </div>
    </main>
  )
}

export default LoginHeroSection
