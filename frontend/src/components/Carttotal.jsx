import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
const Carttotal = () => {
  const {currency,delivery_fee,total}=useContext(ShopContext);
  return (
    <div className='w-full '>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
      <div className='flex justify-between'>
      <p>Subtotal</p>
      <p>{currency}{total()}.00</p>
      </div>
      <hr />
      <div className='flex justify-between'>
      <p>Shipping fee</p>
      <p>{currency}{delivery_fee}.00</p>
      </div>
      <hr />
      <div className='flex justify-between'>
      <b>Total</b>
      <b>{currency}{total()===0 ? 0 :total()+ delivery_fee }.00</b>
      </div>
      </div>
    </div>
  )
}

export default Carttotal;
