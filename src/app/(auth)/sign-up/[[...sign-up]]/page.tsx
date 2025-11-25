import React from 'react'

import { Button } from "@/components/ui/button"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Eye } from 'lucide-react'
import { SignUp } from '@clerk/nextjs'


const page = () => {
  return (
    <div className='flex w-full min-h-screen'>
      <div className='w-[50%] flex items-center justify-center'>
        {/* <div className=' flex flex-col w-full items-center justify-center'>
          <div className='text-center mb-5 space-y-1'>
            <h1 className='text-5xl gradient-text font-[georgia]'>Rizzume</h1>
            <p className='text-gray-600'>Make Perfect Templates with our builder</p>
          </div>

          <div className='space-y-3 mb-4'>

            <div className=''>
              <Button className='w-full'>
                <div className='flex gap-5 pl-3'>
                  <img src="/linkedin-logo.svg" alt="" className='w-4' />
                  <span>Sign In With Linkedin</span>
                </div>
              </Button>
            </div>

            <div>
              <Button className='w-full'>
                <div className='flex gap-5'>
                  <img src="/google-logo.png" alt="" className='w-5' />
                  <span className=''>Sign In With Google</span>
                </div>
              </Button>
            </div>

            <div>
              <Button className='w-full'>
                <div className='flex gap-5'>
                  <img src="/github-logo.svg" alt="" className='w-5' />
                  <span>Sign In With Github</span>
                </div>
              </Button>
            </div>

          </div>

          <div className='w-full mb-5'>
            <hr className='border-innerCard  border-10' />
          </div>

          <div className='flex items-start w-full mb-5'>
            <div className='grid grid-cols-2 w-full gap-5'>
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="firstname">FIRSTNAME</Label>
                  <Input type="text" id="firstname" placeholder="Enter your first name" className='' />
                </div>
              </div>
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="lastname">LASTNAME</Label>
                  <Input type="text" id="lastname" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">EMAIL</Label>
                  <Input type="email" id="email" placeholder="Enter your email address" />
                </div>
              </div>
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="contact">PHONE NO.</Label>
                  <Input type="text" id="contact" placeholder="Enter your contact details" />
                </div>
              </div>
              <div>
                <div className="relative grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input type="password" id="password" placeholder="Enter your password" />
                  <div className='absolute right-2 flex mt-4'>
                    <Eye />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="rePassword">CONFIRM PASSWORD</Label>
                  <Input type="password" id="rePassword" placeholder="Enter confirm password" />
                </div>
              </div>
            </div>

          </div>

          <div className='flex flex-col items-start w-full space-y-2'>
            <Button className='w-32'>SignUp</Button>
            <div className='flex items-center text-sm'>
                <p className='text-blue-700 '>Already have a account? <span className='hover:text-blue-400 cursor-pointer hover:underline'>Sign In</span></p>
            </div>
          </div>

        </div> */}

        <SignUp />

      </div>

      <div className='w-[50%] bg-innerCard rounded'>
          
      </div>
    </div>
  )
}

export default page
