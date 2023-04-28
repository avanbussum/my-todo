import { BsFillTrashFill } from 'react-icons/bs'
import Modal from './Modal'

const Task = ({firstName, lastName, onClick}) => {
  return (
    <div>
      <div className='flex items-center justify-between text-white gap-3 flex-1'>
        <div className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-3'>
            {firstName}
        </div>
        <div className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-3'>
            {lastName}
        </div>
        <Modal/>
        <div className='w-16 items-center justify-center'>
          <BsFillTrashFill
            onClick={onClick}
            className='text-2xl cursor-pointer mx-4 mb-2'
          />
        </div>
      </div>
    </div>
  )
}

export default Task
