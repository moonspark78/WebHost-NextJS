import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import HoistingOptionsCard from './HoistingOptionsCard'

const HostingOptions = () => {
  return (
    <div className='pt-20 pb-16'>
        <SectionHeading heading='Our Hosting Options'/>
        {/* Grid system */}
        <div className='w-[85%] mt-20 mx-auto gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {/* HoistingOptionsCard 1 */}
          <div>
            <HoistingOptionsCard 
              icon="/images/i4.png"
              title="Wordpress Hoisting"
              price="12.99$"
            />
          </div>
          {/* HoistingOptionsCard 2 */}
          <div>
            <HoistingOptionsCard 
              icon="/images/i5.png"
              title="Web Hoisting"
              price="17.99$"
            />
          </div>
          {/* HoistingOptionsCard 3 */}
          <div>
            <HoistingOptionsCard 
              icon="/images/i6.png"
              title="Vps Hoisting"
              price="32.99$"
            />
          </div>
          {/* HoistingOptionsCard 4 */}
          <div>
            <HoistingOptionsCard 
              icon="/images/i7.png"
              title="Cloud Hoisting"
              price="52.99$"
            />
          </div>
        </div>
    </div>
  )
}

export default HostingOptions