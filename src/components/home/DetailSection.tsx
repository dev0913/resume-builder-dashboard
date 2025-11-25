import React from 'react'
import './style.css'
function Details() {
  return (
    <>
      <div id="detail" className='bg-[#161616] h-full md:h-screen text-white p-2 hidden md:block'>
        <div className='flex flex-col md:flex-row w-[90%] h-[70%] items-center justify-center m-auto md:mt-24'>
          <div className='md:w-[40%] p-6 space-y-5'>
            <h1 className='text-2xl lg:text-3xl'>
              Use the Most Powerful <br /> AI Resume Writer
            </h1>
            <p className=''>
              Find the right words and automate your resume writing process with Resume Builder’s free AI resume writer.
              Just enter a job title or phrase, and our AI will provide suggestions that show employers you’re the best fit.
            </p>
            <button className='bg-black border p-2 rounded-lg hover:shadow-sm hover:shadow-white'>
              Learn More &#10132;
            </button>
          </div>
          <div className='w-[80%] md:w-[55%] md:h-[90%] h-52 gradient-bg relative flex items-center rounded-lg overflow-hidden'>
            <div className=' w-full h-full flex justify-center items-end'>
              <img src="/images/Mask group-1.png" alt="" className='w-[60%] lg:h-[90%] md:-mb-11' />
            </div>
          </div>
        </div>
      </div>


      <div className='bg-[#161616] h-full text-white p-2 md:hidden'>
        <div className='flex flex-col items-center p-5 w-[80%] m-auto'>

          <div className='gradient-bg w-84 h-64 pt-12 rounded-lg'>

            <img src="/images/Mask group-1.png" alt="" className='p-5' />

          </div>
          <div className='flex flex-col pt-4 gap-3'>
            <h1 className='text-lg font-bold'>
              Use the Most Powerful <br /> AI Resume Writer
            </h1>
            <p className='leading-7'>
              Find the right words and automate your resume writing process with Resume Builder’s free AI resume writer.
              Just enter a job title or phrase, and our AI will provide suggestions that show employers you’re the best fit.
            </p>
            <button className=''>
              Learn More &#10132;
            </button>
          </div>
        </div>
      </div>


      <div className='bg-[#161616] h-full md:h-screen text-white p-2 hidden md:block'>
                <div className='flex flex-col md:flex-row w-[90%] h-[70%] items-center justify-center m-auto md:mt-24'>

                    <div className='w-[80%] md:w-[55%] md:h-[90%] h-52 gradient-bg relative flex items-center rounded-lg overflow-hidden mr-5 ml-4 md:ml-0'>
                        <div className=' w-full h-full flex justify-center items-end'>
                            <img src="/images/Mask group-1.png" alt="" width={400} className='w-[60%] lg:h-[90%] md:-mb-11' />
                        </div>
                    </div>
                    <div className='md:w-[40%] p-6 space-y-5'>
                        <h1 className='text-2xl lg:text-3xl'>
                            Get Expert <br />Suggestions and Guidance
                        </h1>
                        <p className=''>
                            Use Suggested Phrases to get job-specific phrases from certified resume writers that help you plug in job descriptions, career summaries, and more.
                        </p>
                        <button className='bg-black border p-2 rounded-lg hover:shadow-sm hover:shadow-white'>
                            Learn More &#10132;
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-[#161616] h-full text-white p-2 md:hidden'>
                <div className='flex flex-col items-center p-5 w-[80%] m-auto'>

                    <div className='gradient-bg w-84 h-64 pt-12 rounded-lg'>

                        <img src="/images/Mask group-1.png" alt="" className='p-5' />

                    </div>
                    <div className='flex flex-col pt-4 gap-3'>
                        <h1 className='text-lg font-bold'>
                            Get Expert <br />Suggestions and Guidance
                        </h1>
                        <p className='leading-7'>
                            Use Suggested Phrases to get job-specific phrases from certified resume writers that help you plug in job descriptions, career summaries, and more.
                        </p>
                        <button className=''>
                            Learn More &#10132;
                        </button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Details
