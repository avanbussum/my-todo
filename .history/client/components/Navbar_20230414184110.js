import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import Dropdown from './Dropdown'
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='w-[full] flex px-2 py-8 justify-between'>
      <Link href="/devin">this page!</Link>
    
      <HiMenuAlt4 className='text-[#93aff9] text-3xl cursor-pointer' />
      <div className='flex-1 flex place-content-end gap-[30px]'>
        <BiSearch className='text-[#93aff9] text-3xl cursor-pointer' />
        <IoIosNotificationsOutline className='text-[#93aff9] text-3xl cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar
