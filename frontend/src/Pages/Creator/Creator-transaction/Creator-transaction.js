import React from 'react'
import Notification from '../../../Components/Notification/Notification'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import '../../Creator/Creator-transaction/Creator-transaction.css'
const CreatorTransaction = () => {
  return (
    <div className='Transaction-main-container container d-flex flex-column'>
        <div className='transaction-stats-main'>

        </div>
        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> Malak</p>
        </Notification>

        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> Malak</p>
        </Notification>

        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> Malak</p>
        </Notification>

        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> Malak</p>
        </Notification>
        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> Malak</p>
        </Notification>
        <Notification>
      <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> Malak</p>
        </Notification>
    
    </div>
  )
}

export default CreatorTransaction