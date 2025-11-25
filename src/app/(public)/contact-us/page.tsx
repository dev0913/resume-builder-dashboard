

import { Locate, LocateFixedIcon, MapPin } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen">

            <div className='font-[arch] pt-16 pb-8'>
                <h1 className='text-5xl gradient-text text-center'>Contact Us</h1>
            </div>
            <div className='static'>


                <div className='bg-innerCard w-full h-96 '>
                    <div className='absolute left-40 bottom-24 w-52 space-y-3'>
                        <h1 className='text-xl font-[archivo]'>CONTACT US</h1>
                        <p className='text-3xl'>Let's talk about your problem.</p>
                    </div>

                    <div className=''>
                        <div className='absolute -bottom-16 left-40'>
                            <div className='flex space-x-3'>
                                <div>
                                    <MapPin size={28} />
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <p>Our Location</p>
                                    <div>
                                        <p>Poreyahat, Jharkhand India</p>
                                        <p>814153</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='absolute -bottom-16 right-[40%]'>
                            <div className='flex space-x-3'>
                                <div>
                                    <MapPin size={28} />
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <p>How Can We Help?</p>
                                    <div>
                                        <p>+91 xxxxxxxx</p>
                                        <p>contact@rizzume.com</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='absolute right-10 p-6 font-[archivo]'>
                        <div className='p-10  bg-background px-20 rounded-lg'>
                            <h1 className='text-xl mb-5'>Send Us a Message</h1>

                            <div className='space-y-2'>
                                <div className='flex flex-col space-y-1'>
                                    <label htmlFor="fullName" className='text-sm '>Full Name *</label>
                                    <input type="text" name="" id="" className='bg-innerCard p-1'/>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <label htmlFor="email" className='text-sm '>Email *</label>
                                    <input type="email" name="" id="" className='bg-innerCard p-1'/>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <label htmlFor="phone" className='text-sm '>Phone *</label>
                                    <input type="tel" name="" id="" className='bg-innerCard p-1'/>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <label htmlFor="fullName" className='text-sm '>Message *</label>
                                    <textarea name="" id=""  className='p-1 bg-innerCard'></textarea>
                                </div>
                                <div className='flex justify-center'>
                                    <input type="button" value="Send" className='mt-3 border p-2 px-3 rounded-lg bg-innerCard cursor-pointer hover:shadow-sm hover:shadow-white'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='w-full h-96 '>

            </div>


        </div>


    )
}

export default page

