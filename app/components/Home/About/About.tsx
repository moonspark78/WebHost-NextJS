import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'

const About = () => {
  return (
    <div className='pt-20 pb-16'>
        {/* Section Heading */}
        <SectionHeading heading='About Us'/>
        {/* Define grid Section */}
        <div className='w-4/5 mx-auto items-center mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Image Content */}
            <div></div>
            {/* Text Content */}
            <div></div>
        </div>
    </div>
  )
}

export default About