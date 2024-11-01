import React from 'react'
import { asset } from '../assets/assets.js'

const Navbar = ({settoken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className="w-[max(10%,80px)]"src={asset.logo} alt="LOGO" />
      <button onClick={() => settoken('')}className='bg-gray-600 text-white px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar