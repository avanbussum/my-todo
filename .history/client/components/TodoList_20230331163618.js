import Navbar from './Navbar'
import Patient from './Patient'
import Modal from './Modal'
import { IoMdAddCircle } from 'react-icons/io'

const TodoList = ({patients, firstName, lastName, setFirstName, setLastName, addPatient, deletePatient}) => <div className='w-[70%] bg-[#354ea3] py-4 px-9 rounded-[30px] overflow-y-scroll'>
  <Navbar />
  <h2 className='text-4xl bolder text-white pb-8'>
    Hello First Responder
  </h2>
  <div className='py-3 text-[#7d99e9]'>TODAY&apos;S PATIENTS ASSESSED</div>
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
    <Modal/>
    <IoMdAddCircle
      // Add an onClick method
      onClick={addPatient}
      className='text-[#ea0aff] text-[80px] cursor-pointer ml-[22px] mb-[10px]'
    />
  </form>
  <ul>
    {/* Loop through all patients here using the Patient component */}
    {patients.map(item => (
      <Patient
        key={item.id}
        firstName={item.firstName}
        lastName={item.lastName}
        onClick={deletePatient(item.id)}
        //onClick delete
      />
    ))}
  </ul>
  <div>SPLIIIT</div>
  <div>SPLIIIT</div>
  <div>SPLIIIT</div>

  <ul>
    {/* Loop through all patients here using the Patient component */}
    {event.map(item => (
      <Patient
        key={item.id}
        firstName={item.firstName}
        lastName={item.lastName}
        onClick={deletePatient(item.id)}
        //onClick delete
      />
    ))}
  </ul>
</div>

export default TodoList