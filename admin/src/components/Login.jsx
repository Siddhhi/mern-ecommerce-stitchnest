import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { backendUrl } from '../App'
import {toast} from 'react-toastify';
const Login = ({settoken}) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const Onsubmithandler = async (e) => { 
    try {
      e.preventDefault() //to prevent reload of page
      const response= await axios.post(backendUrl + '/api/user/admin',{email,password})
      if(response.data.success){
        settoken(response.data.token)
      }
      else{
      toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
   }
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={Onsubmithandler} >
          <div className='mb-3 min-w-72'>
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input onChange={(e) =>setemail(e.target.value)} value={email} className='w-full className= rounded-md px-3 py-2 border border-gray-300outline-none' type="email" placeholder='your@email.com' required />

          </div>
          <div className='mb-3 min-w-72'>
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input onChange={(e) =>setpassword(e.target.value)} value={password} className='w-full rounded-md px-3 py-2 border border-gray-300outline-none' type="password" placeholder='Enter Your password' required />
          </div>
          <button className='mt-2 w-full px-2 py-4 rounded-md bg-black text-white' type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
