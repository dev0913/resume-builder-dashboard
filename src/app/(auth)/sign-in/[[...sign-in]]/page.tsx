import React from 'react'


import { SignIn } from '@clerk/nextjs'



const page = () => {

  return (
    <div className='flex w-full min-h-screen'>
      <div className='w-[50%] flex items-center justify-center'>
      

          <SignIn  />

      </div>

      <div className='w-[50%] bg-innerCard rounded'>
          
      </div>
    </div>
  )
}

export default page
