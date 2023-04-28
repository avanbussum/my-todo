import WrongNetworkMessage from '../components/WrongNetworkMessage'
import ConnectWalletButton from '../components/ConnectWalletButton'
import TodoList from '../components/TodoList'
import { PatientContractAddress } from '../config.js'
import PatientAbi from '../../backend/build/contracts/PatientContract.json'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
/* 
const patients = [
  { id: 0, patientText: 'clean', isDeleted: false }, 
  { id: 1, patientText: 'food', isDeleted: false }, 
  { id: 2, patientText: 'water', isDeleted: true }
]
*/

export default function Home() {
  const [correctNetwork, setCorrectNetwork] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [currentAccount, setCurrentAccount] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [patients, setPatients] = useState([])
  const [eventLog, setEventLog] = useState([])


  useEffect(() => {
    connectWallet()
    getAllPatients()
    getEvents()
  }, [])
  
  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try{
      const { ethereum } = window
      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      // let chainId = await ethereum.request({method: 'eth_chainId'})
      // console.log('connected to chain: ', chainId)
      // const ganacheChainId = '5777'
      // if(chainId !== ganacheChainId) {
      //   alert('you are not connected to the ganache testnet!')
      //   setCorrectNetwork(false)
      //   return
      // } else {
      //   setCorrectNetwork(true)
      // }

      const accounts = await ethereum.request({method: 'eth_requestAccounts'})
      console.log('Found account', accounts[0])
      setIsUserLoggedIn(true)
      setCurrentAccount(accounts[0])
      
    } catch (error) {
      console.log(error)
    }
  }

  // Just gets all the patients from the contract
  const getAllPatients = async () => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const PatientContract = new ethers.Contract(
          PatientContractAddress,
          PatientAbi.abi,
          signer
        )
        let allPatients = await PatientContract.getMyPatients()
        console.log(allPatients)
        setPatients(allPatients)
      } else {
        console.log('ethereum object does not exist!')
      }
    }catch(error){
      console.log(error)
    }
  }

  // Get all the Add events from the event log
  const getEvents = async () => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const PatientContract = new ethers.Contract(
          PatientContractAddress,
          PatientAbi.abi,
          signer
        )
        
        // Filter by AddPatient Events
        const filter = PatientContract.filters.AddPatient();
        const events = await PatientContract.queryFilter(filter)
        console.log(events)
        const inter = new ethers.utils.Interface(PatientAbi.abi)
        
        for (let i = 0; i < events.length; i++) {
          let parsed = await inter.parseLog(events[i])
            setEventLog([...eventLog, parsed.args])
            console.log('Added patient')
          
        }

        // const parsedLogs = events.map(log => {
        //   return inter.parseLog(log);
        // })
        // setEventLog(parsedLogs)
        
        console.log(eventLog)
        PatientContract.on("AddPatient", (recipient, patientId) => {
          console.log("New AddPatient event with the arguments:")
          console.log(recipient, patientId)
        })

      } else {
        console.log('ethereum object does not exist!')
      }
    }catch(error){
      console.log(error)
    }
  }

  // Add patients from front-end onto the blockchain
  const addPatient = async e => {
    e.preventDefault()

    let patient = {
      firstName: firstName,
      lastName: lastName,
      isDeleted: false
    }

    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const PatientContract = new ethers.Contract(
          PatientContractAddress,
          PatientAbi.abi,
          signer
        )

        PatientContract.addPatient(patient.firstName, patient.lastName, patient.isDeleted)
        .then(res => {
          setPatients([...patients, patient])
          console.log('Added patient')
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        console.log('ethereum object does not exist!')
      }
    } catch(error){
      console.log(error)
    }
    setFirstName('')
    setLastName('')
  }

  // Remove patients from front-end by filtering it out on our "back-end" / blockchain smart contract
  const deletePatient = key => async () => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const PatientContract = new ethers.Contract(
          PatientContractAddress,
          PatientAbi.abi,
          signer
        )

        const deletePatientTx = await PatientContract.deletePatient(key, true)
        console.log('succesfully deleted', deletePatientTx)
        
        let allPatients = await PatientContract.getMyPatients()
        setPatients(allPatients)
      } else {
        console.log('ethereum object does not exist!')
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='bg-[#97b5fe] h-screen w-screen flex justify-center py-6'>
      {!isUserLoggedIn ? <ConnectWalletButton connectWallet={connectWallet}/> :
        'is this the correct network?' ? <TodoList 
          patients={patients} 
          firstName={firstName} 
          setFirstName={setFirstName} 
          lastName={lastName} 
          setLastName={setLastName} 
          addPatient={addPatient} 
          deletePatient={deletePatient}
        /> : 
      <WrongNetworkMessage />}
    </div>
  )
}

