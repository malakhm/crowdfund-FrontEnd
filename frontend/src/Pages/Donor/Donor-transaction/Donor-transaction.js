import React from 'react'
import Notification from '../../../Components/Notification/Notification'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import './Donor-transaction.css'
const DonorTransaction = () => {
  return (
    <div className='Transaction-main-container container d-flex flex-column'>
        <div className='transaction-stats-main'>

        </div>
        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
        </Notification>

        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
        </Notification>

        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
        </Notification>

        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
        </Notification>
        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
        </Notification>
        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
        </Notification>
    
    </div>
  )
}

export default DonorTransaction