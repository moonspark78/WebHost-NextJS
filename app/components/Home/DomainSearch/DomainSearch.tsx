import React from 'react'

const DomainSearch = () => {
  return (
    <div className='pt-12 md:pt-20 pb-16 '>
      <div className='w-[90%] p-6 rounded-2xl bg-blue-700 mx-auto'>
        {/* Heading */}
        <h1 className='text-center mt-8 text-white font-semibold text-xl sm:text-2xl lg:text-3xl tracking-wider'>
          A Domain That Stands Tall on a Billboard
        </h1>
        {/* Search box */}
        <div className='flex  items-center w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-12 rounded-full h-12 md:h-16 bg-white'>
          {/* input */}
          <input
            type="text"
            placeholder='Register a Domain name'
            className='w-4/5 h-full bg-transparent px-8 outline-none'
          />
          {/* Button */}
        </div>
      </div>
    </div>
  )
}

export default DomainSearch