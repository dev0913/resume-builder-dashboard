import React from 'react'
import './style.css'
import Link from 'next/link'
function Banner() {
  return (
    <div id = "banner" className='gradient-bg h-1/2 flex items-center justify-center flex-col text-black'>
      
      <img src="/images/logo-black.png" alt=".jpg" className='w-52 mt-10'/>

      <h1 className='text-2xl lg:text-3xl font-bold mt-5'>
        Work Way Faster Today 
      </h1>

      <p className='text-center mt-5 font-semibold lg:text-xl'>
      Choose from our expertly designed resume templates and start building your professional resume in just a few seconds. 
      </p>

      <Link href='/templates'>
      <div className='bg-black text-white p-2 lg:p-4 mt-5 text-sm rounded-md px-5 mb-20 hover:cursor-pointer hover:shadow-sm hover:shadow-black'>
        Create Your Resume Now
      </div>
      </Link>
    </div>
  )
}

export default Banner
