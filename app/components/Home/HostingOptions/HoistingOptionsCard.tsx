"use client"

import Image from 'next/image';
import React from 'react'
import { BiArrowToRight } from 'react-icons/bi';
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
            <h1 className='text-center text-[#232c45] font-semibold capitalize text-[18px]'>
                {title}
            </h1>
            <p className='text-center text-black text-opacity-70 text-[14px] mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur.</p>
            <p className='text-[#232c45] text-center font-semibold text-[14px]'>Starting from  ${price}/month {" "}</p>
            <button className='px-6 py-2 font-semibold text-blue-950 hover:bg-blue-700 hover:text-white transition-all
             duration-300 mx-auto border-[1.2px] border-gray-400 border-opacity-25 mt-8 flex items-center space-x-2 rounded-lg '>
                <span>See Plan</span>
                <BiArrowToRight/>
            </button>
        </div>
    </Tilt>
  )
}

export default HoistingOptionsCard