"use client"

import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';

type Props={
    icon: string;
    title: string;
    price: string; 
}

const HoistingOptionsCard = ({icon,title,price}:Props) => {
  return (
    <Tilt className='parallax-effect' perspective={500}>
        <div className='bg-gray-200 rounded-lg h-full p-6 w-full'>
            {/* Image Icon */}
            <div>
                <Image
                    alt={title}
                    src={icon}
                    width={80}
                    height={80}
                    className='mx-auto mt-8 mb-8'
                />
            </div>
        </div>
    </Tilt>
  )
}

export default HoistingOptionsCard