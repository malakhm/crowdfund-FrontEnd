import React from 'react'
import './Notification.css'
const Notification = ({ children }) => {
  return (
    <div className='Notification-component-main container d-flex justify-self-center'>
        <div className='single-notification container d-flex justify-self-center'>
            { children } donated <p className='amount-of-money-transaction'>$1000</p> 
            for<p>Planting Project</p> </div>
    </div>
  )
}

export default Notification
