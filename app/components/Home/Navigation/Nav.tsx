"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '../../Helper/Button'
import { FaBars } from 'react-icons/fa'

const Nav = () => {

  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = ( ) => {
      if(window.scrollY >= 90) setNavSticky(true);
      if(window.scrollY <= 90) setNavSticky(false); 
    }
    window.addEventListener( 'scroll', handler );
  },[])



  return (
    <div className={` ${navSticky ? "bg-blue-950" : "fixed"} fixed bg-blue-500 w-full transition-all duration-200 z-[1000]`}>
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
              <li>
                <Link href="#" className='nav__link'>About</Link>
              </li>
              <li>
                <Link href="#" className='nav__link'>Hosting</Link>
              </li>
              <li>
                <Link href="#" className='nav__link'>Domain</Link>
              </li>
              <li>
                <Link href="#" className='nav__link'>Help center</Link>
              </li>
            </ul>
            {/* Login button and burger menu */}
            <div className='flex items-center space-x-6'>
                <Button bg='bg-orange-600'>Login</Button>
                <FaBars className='w-6 h-6 md:w-7 md:h-7 lg:hidden text-white rotate-180'/>
            </div>
        </div>
    </div>
  )
}

export default Nav