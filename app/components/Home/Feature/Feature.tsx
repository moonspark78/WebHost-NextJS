import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import SwiperSlider from './SwiperSlider'

const Feature = () => {
  return (
    <div className='pt-16 pb-12'>
        {/* Section Heading */}
        <SectionHeading heading='Our Hosting Solution'/>
        {/* Define a grid systeme */}
        <div className='w-4/5 mx-auto mt-12 md:mt-20 items-center grid grid-cols-1 lg:grid-cols-2 gap-14'>
            {/* Text Content */}
            <div>
                <h1 className='text-2xl md:text-3xl text-blue-950 font-bold tracking-tighter'>
                    We Provide Hosting Solution
                </h1>
                <p className='mt-4 mb-4 text-black text-sm md:text-base font-normal opacity-80'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore cumque aliquid debitis et
                    sequi nobis neque necessitatibus ea repudiandae corporis pariatur suscipit earum aspernatur voluptas vitae.
                </p>
                <p className='mt-4 mb-4 text-black text-sm md:text-base font-normal opacity-80'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore cumque aliquid debitis et
                    sequi nobis neque necessitatibus ea repudiandae corporis pariatur suscipit earum aspernatur voluptas vitae.
                </p>
            </div>
            {/* Slider */}
            <div>
                <SwiperSlider/>
            </div>
        </div>
    </div>
  )
}

export default Feature