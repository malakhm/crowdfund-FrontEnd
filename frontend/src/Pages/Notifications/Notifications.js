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


/* eslint-disable react/jsx-no-undef */
import './Notifications.css';

const Notification = ({ children, username, amount, campaign }) => {
  return (
    <div className='Notification-component-main container d-flex justify-self-center'>
      <div className='single-notification container d-flex justify-self-center'>
        {username} donated ${amount} for {campaign}
      </div>
    </div>
  );
};

export default Notification;
/* eslint-enable react/jsx-no-undef */
  

