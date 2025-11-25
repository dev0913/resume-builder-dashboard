


import Banner from '@/components/home/BannerSection'
import React from 'react'

const page = () => {
    return (
        <div className='w-full min-h-screen relative font-[archivo]'>

            <div className='text-3xl w-full text-center pt-12 bg-black'>
                <h1 className='gradient-text'>
                    About Rizzume
                </h1>
            </div>

            <div className='w-full bg-black flex p-20 mt-12 px-32'>
                <div className='w-[50%] p-12 space-y-3'>

                    <h1 className='text-3xl'>
                        Market Veda: Empowering Traders, Shaping Futures
                    </h1>

                    <div className='text-sm space-y-3 text-muted-foreground'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam cumque quidem odio mollitia vel et neque dolor voluptate excepturi amet, enim sunt. Laborum nihil odit fugit dolor impedit exercitationem tempora eveniet sint, facere architecto, possimus sunt, voluptatibus recusandae asperiores dolores dicta! Molestias unde pariatur sunt consequuntur! Earum, veniam praesentium!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam cumque quidem odio mollitia vel et neque dolor voluptate excepturi amet, enim sunt. Laborum nihil odit fugit dolor impedit exercitationem tempora eveniet sint, facere architecto,
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam cumque quidem odio mollitia vel et neque dolor voluptate excepturi amet, enim sunt.
                        </p>
                    </div>

                </div>

                <div className='w-[50%] pl-16 mt-5 flex space-x-5'>

                    <div className='w-[50%]'>
                        <img src="/images/about-image-01.jpg" alt="" />
                    </div>

                    <div className='space-y-3'>
                        <img src="/images/about-image-02.jpg" alt="" />
                        <div className='w-full h-20 bg-gray-800 text-sm text-center py-4'>
                            <p>00</p>
                            <p>We have</p>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>



            </div>


            <Banner />

            <div className='w-full p-20 bg-black flex px-32'>
                <div className='w-[50%] p-12 py-10 space-y-3'>
                    <div className=''>
                        <h1 className='text-3xl'>
                            Why Rizzume Stands Out?
                        </h1>
                    </div>

                    <div className='text-xs text-muted-foreground space-y-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit consectetur placeat qui pariatur quasi provident, magnam impedit vitae assumenda officiis voluptatem eveniet quod animi itaque enim, sunt hic dolores libero est. Obcaecati, repellat cupiditate magnam explicabo eaque ullam aliquam ipsa adipisci. Ex quae totam excepturi officia ipsam doloremque veritatis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit consectetur placeat qui pariatur quasi provident, magnam impedit vitae assumenda officiis voluptatem eveniet quod animi itaque enim, sunt hic dolores libero est. Obcaecati, repellat cupiditate magnam explicabo eaque ullam aliquam ipsa adipisci. Ex quae totam excepturi officia ipsam doloremque veritatis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit consectetur placeat qui pariatur quasi provident, magnam impedit vitae assumenda officiis voluptatem eveniet quod animi itaque enim, sunt hic dolores libero est. Obcaecati, repellat cupiditate magnam explicabo eaque ullam aliquam ipsa adipisci. Ex quae totam excepturi officia ipsam doloremque veritatis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit consectetur placeat qui pariatur quasi provident, magnam impedit vitae assumenda officiis voluptatem eveniet quod animi itaque enim, sunt hic dolores libero est. Obcaecati, repellat cupiditate magnam explicabo eaque ullam aliquam ipsa adipisci. Ex quae totam excepturi officia ipsam doloremque veritatis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit consectetur placeat qui pariatur quasi provident, magnam impedit vitae assumenda officiis voluptatem eveniet quod animi itaque enim, sunt hic dolores libero est. Obcaecati, repellat cupiditate magnam explicabo eaque ullam aliquam ipsa adipisci. Ex quae totam excepturi officia ipsam doloremque veritatis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit consectetur placeat qui pariatur quasi provident, magnam impedit vitae assumenda officiis voluptatem eveniet quod animi itaque enim, sunt hic dolores libero est. Obcaecati, repellat cupiditate magnam explicabo eaque ullam aliquam ipsa adipisci. Ex quae totam excepturi officia ipsam doloremque veritatis.</p>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <div className='px-20 py-10'>
                        <img src="/images/about-image-03.jpg" alt="" className='rounded-xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

