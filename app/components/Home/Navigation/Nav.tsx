import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='fixed bg-blue-950 w-full transition-all duration-200 z-[1000]'>
        <div className='flex items-center h-[10vh] lg:h-[12vh] justify-between w-4/5 mx-auto'>
            {/* Logo */}
            <div className='font-bold text-white text-2xl'>
                <span className='text-3xl md:text-4xl font-bold text-yellow-300'>We</span>
                Host
            </div>
            {/* Nav links */}
            <ul className='lg:flex hidden items-center space-x-10 lg:space-x-12 xl:space-x-14'>
              <li>
                <Link href="#" className='nav__link'>Home</Link>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav