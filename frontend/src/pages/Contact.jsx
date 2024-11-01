import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'
const Contact = () => {
  return (
    <div className=''>
      <div className='text-center text-2xl pt-10 border-t '>
        <Title text1={'Contact'} text2={'Us'}/> 
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
      <img src={assets.contact} className='w-full md:max-w-[480px]' alt="" />
      <div className='flex flex-col justify-center gap-6 items-start'>
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'> 54780 Willam Station <br /> Suite 350,Washingtonn ,USA </p>
        <p className='text-gray-500'> Tel : 921XXXXXXX <br /> Email: sia@gmail.com</p>
        <p className='font-semibold text-xl text-gray-600'>Careers at </p>
        <p className='text-gray-500'> Learn More about Our Teams and Job Opening </p>
       <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Job</button>
      </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default Contact
