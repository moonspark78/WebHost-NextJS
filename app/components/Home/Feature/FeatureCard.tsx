import Image from 'next/image';
import React from 'react'


type Props={
    image: string;
    title: string;
}

const FeatureCard = ({image,title}: Props) => {
  return (
    <div>
        <div className='w-20 h-20 mx-auto bg-white rounded-full mt-8 mb-6 flex items-center justify-center flex-col'>
            <Image
                src={image}
                alt={title}
                width={50}
                height={50}
            />
        </div>
        <h1 className='text-center text-white font-bold tracking-wider text-2xl'>
            {title}
        </h1>
    </div>
  )
}

export default FeatureCard