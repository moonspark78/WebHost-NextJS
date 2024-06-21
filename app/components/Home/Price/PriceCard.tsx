import Image from 'next/image';
import React from 'react'


type Props ={
  image:string;
  plan:string;
  price:string;
}



const PriceCard = ({image, plan, price}:Props) => {
  return (
    <div className='bg-[#e3f0ff] hover:scale-110 transition-all duration-500 rounded-lg p-4 md:p-10'>
      {/* Image Icon */}
      <Image
        src={image}
        alt={plan}
        width={50}
        height={50}
        className='mt-8 mb-8'
      />
      <h1 className='text-2xl font-bold tracking-wider text-blue-950'>
        {plan}
      </h1>
    </div>
  )
}

export default PriceCard