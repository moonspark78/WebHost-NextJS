import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import Image from 'next/image'

const About = () => {
  return (
    <div className='pt-20 pb-16'>
        {/* Section Heading */}
        <SectionHeading heading='About Us'/>
        {/* Define grid Section */}
        <div className='w-4/5 mx-auto items-center mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Image Content */}
            <div>
              <Image
                src="/images/about2.jpg"
                alt='about'
                width={550}
                height={550}
                className='rounded-lg -rotate-12'
              />
            </div>
            {/* Text Content */}
            <div>
              <h1 className='text-2xl md:text-3xl text-[#2d3c58] font-bold'>
                We Build Our Business For Your Success.
              </h1>
              <p className='mt-4 text-base text-[#556180] text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste omnis illo officia?
                Harum debitis aperiam accusantium nam nihil, corrupti similique voluptatem deleniti possimus cumque!
                Nemo perferendis corrupti veritatis ratione odit!
              </p>
              <p className='mt-4 text-base text-[#556180] text-opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore corporis exercitationem cupiditate,
                voluptatibus doloremque explicabo quidem! Dolorem esse fuga quas.
              </p>
              {/* 1st item */}
              <div className='mt-8 flex items-center space-x-8'>
                <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-col'>
                  <Image
                    src="/images/i1.svg"
                    alt='image1'
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h1>Web Hosting</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              {/* 2st item */}
              <div className='mt-8 flex items-center space-x-8'>
                <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-col'>
                  <Image
                    src="/images/i2.svg"
                    alt='image1'
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h1>WordPress Hosting</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              {/* 3st item */}
              <div className='mt-8 flex items-center space-x-8'>
                <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-col'>
                  <Image
                    src="/images/i3.svg"
                    alt='image1'
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h1>VPS Hosting</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About