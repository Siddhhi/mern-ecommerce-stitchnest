import React from 'react'
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { MdBrightnessAuto } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
      <MdOutlineCurrencyExchange className='w-12 h-10 m-auto mb-5' />
        <p className='font-semibold'>Easy Exchnage Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy </p>
      </div>
      <div>
      <MdBrightnessAuto className='w-12 h-10 m-auto mb-5' />
        <p className='font-semibold'>7 Days Return Policy </p>
        <p className='text-gray-400'>We provide 7 day free return policy </p>
      </div>
      <div>
      <RiCustomerService2Fill className='w-12 h-10 m-auto mb-5' />
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>We provide 24/7 customer support  </p>
      </div>
    </div>
  )
}

export default Ourpolicy
