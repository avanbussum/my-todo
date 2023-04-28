import { BsFillTrashFill } from 'react-icons/bs'

const Task = ({firstName, lastName, onClick}) => {
  return (
    <div>
      <div className='flex items-center justify-between text-white gap-3 flex-1'>
        <div className=' bg-[#031956] text-[#b6c7db] rounded-[15px] mb-[10px] w-full'>
          <div className='flex items-center justify-between w-full p-[20px] text-xl'>
            {firstName}
          </div>
        </div>
        <div className=' bg-[#031956] text-[#b6c7db] rounded-[15px] mb-[10px] w-full'>
          <div className='flex items-center justify-between w-full p-[20px] text-xl'>
            {lastName}
          </div>
        </div>
        <div className='w-16 items-center justify-center'>
          <BsFillTrashFill
            onClick={onClick}
            className='text-2xl cursor-pointer ml-5'
          />
        </div>
      </div>
      <div className='flex items-center justify-between text-white gap-3 flex-1'>
      
      </div>
    </div>
  )
}

export default Task
