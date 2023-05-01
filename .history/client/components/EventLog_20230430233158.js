import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'

function EventLog({eventLog, setShowEventLog}) {
  return (
    <div className='bg-gray-200 rounded-md w-full px-5 pb-2 pt-4 mt-5'>
        <div className='flex justify-between'>
            <h1 className='font-bold text-2xl underline mb-4'> Event Log </h1>
            <IoMdCloseCircle 
                className='text-3xl cursor-pointer'
                onClick={() => setShowEventLog(false)}
            />
        </div>
        <ul>
            {/* Loop through all patients here using the Patient component */}
            {eventLog.map(item => (
                <li keyclassName='font-bold bg-gray-300 p-4 mb-4 rounded-md'>
                <p>Editor: {item[0]}</p>
                <p>Patient ID: {item[1]._hex}</p>
                <p>Patient Name: {item.firstName} {item.lastName}</p>
                <p>Time: {new Date(parseInt(item.timestamp._hex,16)*1000).toLocaleString()}
                </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default EventLog