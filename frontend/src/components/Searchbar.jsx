import React, { useContext, useEffect ,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useLocation } from 'react-router-dom';
const Searchbar = () => {
  const {search,setsearch,showSearch,setshowSearch}=useContext(ShopContext)
  const [visible, setvisible] = useState(false);
  const location=useLocation();
  useEffect(() => {
    if(location.pathname.includes('collection') ){
      setvisible(true)
    }
    else{
      setvisible(false)
    }
  }, [location])
  
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex justify-center border border-gray-400 py-2 px-5 my-5 mx-3 rounded-full sm:w-1/2 w-3/4 items-center'>
        <input value={search} onChange={(e) =>setsearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none text-sm bg-inherit'/>
        <FaSearch className='w-4' />
      </div>
      <IoMdClose onClick={() =>setshowSearch(false)}className='inline w-3 cursor-pointer'/>
    </div>
  ) : null
}

export default Searchbar
