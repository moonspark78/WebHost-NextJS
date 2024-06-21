import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='mt-20 pb-16'>
        {/* Section Heading */}
        <SectionHeading heading='Our Pricing'/>
        {/* Define grid system */}
        <div className='w-4/5 mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {/* Price Card 1 */}
            <div>
                <PriceCard image="/images/p1.png" plan="Basic" price="9.99"/>
            </div>
        </div>
    </div>
  )
}

export default Price