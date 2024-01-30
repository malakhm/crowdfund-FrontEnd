// import React from "react";
// import { Link } from "react-router-dom";
// import io from "socket.io-client";

// const socket = io("http://localhost:8100");

// const SendNotification = () => {
//   const sendNotification = () => {
//     socket.emit("send_notification", { notification_message: {source_user: "put name of user here from authcontext", message_text: "put notofication here"}});
//   };

//   return (
//     <div className="send-notification-component">
//       <input placeholder="Notification...." />
//       <button onClick={sendNotification}>Send notification</button>
//     </div>
//   );
// };

// export default SendNotification;

// import "./Notification.css";

// const Notification = ({ children, donation }) => {
//   return (
//     <div className="Notification-component-main container d-flex justify-self-center">
//       <p className="donation-id-in-transactions">#{donation.id}</p>
//       <div className="single-notification container d-flex justify-self-center">
//         <Link to={"/admin/donors"} className="amount-of-money-transaction">
//           {children}
//         </Link>
//         donated
//         <p className="amount-of-money-transaction">${donation.amount}</p>
//         for the campaign
//         <Link to={"/admin/campaigns"} className="amount-of-money-transaction">
//           {donation.Campaign.campaign_name}
//         </Link>
//         created by
//         <Link to={"/admin/creators"} className="amount-of-money-transaction">
//           {donation.creator.username}
//         </Link>
//       </div>
//       <p className="donation-date-in-transactions">
//         <p>{donation.createdAt.split("T")[0]}</p>
//        <p>{donation.createdAt.split("T")[1].slice(0,8)}</p>
//       </p>
//     </div>
//   );
// };

// export default Notification;
