
import React from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:8100");

// const SendNotification = () => {
//   const sendNotification = () => {
//     socket.emit("send_notification", { notification_message: {source_user: "put name of user here from authcontext", message_text: "put notofication here"}});
//   };
// }
//   return (
//     <div className="send-notification-component">
//       <input placeholder="Notification...." />
//       <button onClick={sendNotification}>Send notification</button>
//     </div>
//   );
// };

// export default SendNotification;



// import './Notification.css';

// const Notification = ({ children, username, amount, campaign }) => {
//   return (
//     <div className='Notification-component-main container d-flex justify-self-center '>
//       <div className='single-notification container d-flex justify-self-center'>
//         {username} donated ${amount} for {campaign}
//       </div>
//     </div>
//   );
// };

// export default Notification;

// import { IoCheckmarkDoneCircle } from "react-icons/io5";

// import React from "react";
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

import { IoCheckmarkDoneCircle } from "react-icons/io5";

import React from "react";




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
