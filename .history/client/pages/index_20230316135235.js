import WrongNetworkMessage from '../components/WrongNetworkMessage'
import ConnectWalletButton from '../components/ConnectWalletButton'
import TodoList from '../components/TodoList'
import { TaskContractAddress } from '../config.js'
import TaskAbi from '../../backend/build/contracts/TaskContract.json'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
/* 
const tasks = [
  { id: 0, taskText: 'clean', isDeleted: false }, 
  { id: 1, taskText: 'food', isDeleted: false }, 
  { id: 2, taskText: 'water', isDeleted: true }
]
*/

export default function Home() {
  const [correctNetwork, setCorrectNetwork] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [currentAccount, setCurrentAccount] = useState('')
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    connectWallet()
    getAllTasks()
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

  // Just gets all the tasks from the contract
  const getAllTasks = async () => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )
        let allTasks = await TaskContract.getMyTasks()
        console.log(allTasks)
        setTasks(allTasks)
      } else {
        console.log('ethereum object does not exist!')
      }
    }catch(error){
      console.log(error)
    }
  }

  // Add tasks from front-end onto the blockchain
  const addTask = async e => {
    e.preventDefault()

    let task = {
      taskText: input1, input2,
      isDeleted: false
    }

    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        TaskContract.addTask(task.taskText, task.isDeleted)
        .then(res => {
          setTasks([...tasks, task])
          console.log('Added task')
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
    setInput1('')
    setInput2
  }

  // Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
  const deleteTask = key => async () => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        const deleteTaskTx = await TaskContract.deleteTask(key, true)
        console.log('succesfully deleted', deleteTaskTx)
        
        let allTasks = await TaskContract.getMyTasks()
        setTasks(allTasks)
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
        'is this the correct network?' ? <TodoList tasks={tasks} input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2} addTask={addTask} deleteTask={deleteTask}/> : 
      <WrongNetworkMessage />}
    </div>
  )
}

