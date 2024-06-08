import React from 'react'

type Props ={
    heading: string;
}



const SectionHeading = ({heading}:Props) => {
  return (
    <div className='text-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl uppercase text-blue-950 font-semibold'>
            {heading}
        </h1>
        <h1 className='w-11/12 sm:w-10/12 md:w-3/5 lg:w-2/4 text-sm md:text-base mt-4 mx-auto text-gray-800
        text-opacity-70 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro vitae corrupti velit eaque.
            Consectetur adipisicing elit. Blanditiis porro vitae corrupti velit eaque.
        </h1>
    </div>
  )
}

export default SectionHeading