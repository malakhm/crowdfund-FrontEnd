
import React from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:8100");

// const SendNotification = () => {
//   const sendNotification = () => {
//     socket.emit("send_notification", { notification_message: "hello" });
//   };

//   return (
//     <div className="send-notification-component">
//       <input placeholder="Notification...." />
//       <button onClick={sendNotification}>Send notification</button>
//     </div>
//   );
// };

// export default SendNotification;

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
