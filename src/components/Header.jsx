import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='flex absolute w-full items-center justify-end z-10 p-20'>
      <button className='bg-black px-3 py-2 rounded-full text-white hover:bg-gray-700'>Hire Me</button>
      <i class="ri-menu-3-line text-2xl ml-3"></i>
    </div>
  )
}

export default Header
