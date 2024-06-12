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
        <div className='flex relative items-center w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-12 rounded-full h-12 md:h-16 bg-white'>
          {/* input */}
          <input
            type="text"
            placeholder='Register a Domain name'
            className='w-4/5 h-full bg-transparent px-8 outline-none'
          />
          {/* Button */}
          <button className='hidden absolute sm:block right-4 h-4/5 font-semibold hover:bg-rose-700 transition-all duration-300 w-[40%]
          lg:w-[20%] bg-blue-900 text-white text-xs sm:text-sm md:text-base rounded-full'>
            Search Domain
          </button>
        </div>
        {/* Compare List */}
        <div className='w-11/12 md:w-9/12 mt-8 mb-8 grid mx-auto items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-12'>
          <p>
            Compare
          </p>
        </div>
      </div>
    </div>
  )
}

export default DomainSearch