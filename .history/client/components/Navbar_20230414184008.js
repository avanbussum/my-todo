import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import Dropdown from './Dropdown'

const Navbar = () => {
  return (
    <div className='w-[full] flex px-2 py-8 justify-between'>
        <h1 className="title">
          Read <Link href="/devin">this page!</Link>
    </h1>
      <HiMenuAlt4 className='text-[#93aff9] text-3xl cursor-pointer' />
      <div className='flex-1 flex place-content-end gap-[30px]'>
        <BiSearch className='text-[#93aff9] text-3xl cursor-pointer' />
        <IoIosNotificationsOutline className='text-[#93aff9] text-3xl cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar
