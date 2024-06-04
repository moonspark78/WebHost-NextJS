import React from 'react'



type Props ={
    children: React.ReactNode
    bg: string
}

const Button = ({children,bg}:Props) => {
  return (
    <button className={`${bg} relative h-10 w-32 md:w-40 rounded-lg text-white overflow-hidden font-medium shadow-2xl
    transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0
    before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600
    hover:before:h-40 before:hover:w-40 hover:before:opacity-80`}>
        <span className='relative z-10'>
            {children}
        </span>
    </button>
  )
}

export default Button