import Navbar from './Navbar'
import Patient from './Patient'
import Modal from './Modal'
import { IoMdAddCircle } from 'react-icons/io'
import Link from 'next/link';
import EventLog from './EventLog';
import { useState } from 'react';



const TodoList = ({eventLog, patients, firstName, lastName, setFirstName, setLastName, addPatient, deletePatient}) => 
{
  const [showEventLog, setShowEventLog] = useState(false)
  return (
  <div className='w-[70%] bg-[#354ea3] py-4 px-9 rounded-[30px] '>
    <Navbar />

    <h2 className='text-4xl bolder text-white '>
      Hello First Responder
    </h2>
    <div className='pt-3 text-[#7d99e9]'>PATIENTS ASSESSED</div>
    <form className='flex items-center justify-center gap-3'>
      <input
        className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-3'
        placeholder='Patient First Name'
        // take input from the form here
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-3'
        placeholder='Patient Last Name'
        // take input from the form here
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <IoMdAddCircle
        // Add an onClick method
        onClick={addPatient}
        className='text-[#ea0aff] text-[80px] cursor-pointer ml-[22px] mb-[10px]'
      />
    </form>
      <ul>
        {/* Loop through all patients here using the Patient component */}
        {patients.map(item => (
          <div className='p-4 pt-6 mb-4 bg-gray-200 rounded-md'>
          <Patient
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            onClick={deletePatient(item.id)}
            //onClick delete
          />    
          </div>
        ))}
      </ul>
    {showEventLog ? (
        <EventLog
          eventLog={eventLog}
          setShowEventLog={setShowEventLog}
        />
      ) :
        <button 
          className='bg-gray-200 rounded-md w-full p-2 mt-5'
          onClick={() => setShowEventLog(true)}
        >
          <h1 className='font-bold text-2xl underline mb-2'> Event Log </h1>
        </button>
    }
  </div>
  )
}

export default TodoList