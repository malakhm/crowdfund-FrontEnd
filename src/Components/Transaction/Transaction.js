import { IoCheckmarkDoneCircle } from "react-icons/io5";
import React from 'react'
const Transaction = ({ amount, campaignName })=> {
  
  return (

    <div className='Notification-component-main container d-flex justify-self-center'>
        <div className='single-notification container d-flex justify-self-center'>
     <IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> 
            you donated <p className='amount-of-money-transaction'>${amount}</p> 
            for<p>{campaignName}</p> </div>
    </div>

  )
}

export default Transaction
