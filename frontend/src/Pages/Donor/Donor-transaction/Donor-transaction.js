import React from 'react'
import Notification from '../../../Components/Notification/Notification'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import './Donor-transaction.css'
const DonorTransaction = () => {
  return (
    <div className='Transaction-main-container container d-flex flex-column'>
        <div className='transaction-stats-main d-flex'>
          <div className='Total-donations'>
            <h6>Total Donations</h6>
            <p>200</p>
          </div>
          <div className='Total-amount'>
          <h6>Total Amount</h6>
            <p>$2000</p>
          </div>
        </div>
        <div className='notifications-wrapper-div'>
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
    </div>
  )
}

export default DonorTransaction