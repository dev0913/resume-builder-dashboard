import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className=''>
      <footer className="bg-black text-white py-10 px-6 sticky bottom-0 font-[archivo] w-full">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start lg:max-w-7xl">

                    <div className="w-full md:w-1/4 mb-6 md:mb-0 hover:cursor-pointer">
                        <img src="/images/logo.png" alt="Logo" className="w-28 mb-3" />
                        <p className="text-gray-400 text-sm lg:text-base">Workflow Organizer for your Project</p>
                    </div>


                    <div className="w-full md:w-3/4 flex flex-wrap justify-between text-sm lg:text-base">
                        <div>
                            <h3 className="font-semibold mb-2">Company</h3>
                            <ul className="text-gray-400 space-y-1">
                                <Link href='/about'><li className='hover:text-white cursor-pointer'>About</li></Link>
                                <Link href='/'><li className='hover:text-white cursor-pointer'>Team</li></Link>
                                <Link href='/contact-us'><li className='hover:text-white cursor-pointer'>Contact</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Product</h3>
                            <ul className="text-gray-400 space-y-1">
                                <li className='hover:text-white cursor-pointer'>Services</li>
                                <li className='hover:text-white cursor-pointer'>Pricing</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Legal</h3>
                            <ul className="text-gray-400 space-y-1">
                                <Link href='/terms&conditions'><li className='hover:text-white cursor-pointer'>Terms & Conditions</li></Link>
                                <Link href='/privacy'><li className='hover:text-white cursor-pointer'>Privacy Policy</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Follow Us</h3>
                            <ul className="text-gray-400 space-y-1">
                                <li className='hover:text-white cursor-pointer'>Facebook</li>
                                <li className='hover:text-white cursor-pointer'>Twitter</li>
                                <li className='hover:text-white cursor-pointer'>LinkedIn</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4 pb-8">
                    © Armus Digital 2025 All Rights Reserved.
                </div>
            </footer>
    </div>
  )
}

export default Footer
