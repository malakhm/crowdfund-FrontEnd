// import React from 'react'
// import Notification from '../../Components/Notification/Notification'
// import './Notifications.css'
// function Notifications() {
//   return (
//     <div className='Notifications-main-container-div container d-flex justify-self-center flex-column'>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//       <Notification>Kamal</Notification>
//     </div>
//   )
// }

// export default Notifications

// import React, { useEffect, useState } from 'react';
// import './Notification.css';

// function Notification() {
//   const [donorName, setDonorName] = useState('');
//   const [donationAmount, setDonationAmount] = useState('');
//   const [projectName, setProjectName] = useState('');
//   const [timestamp, setTimestamp] = useState('');

//   useEffect(() => {
//     // Fetch data from the server
//     fetchNotificationData();
//   }, []);

//   const fetchNotificationData = async () => {
//     try {
//       // Make an API call to retrieve the notification data
//       const response = await fetch('/api/notifications');

//       if (response.ok) {
//         const data = await response.json();

//         // Extract the required information from the data
//         const { donorName, donationAmount, projectName, timestamp } = data;

//         // Update the state with the fetched data
//         setDonorName(donorName);
//         setDonationAmount(donationAmount);
//         setProjectName(projectName);
//         setTimestamp(timestamp);
//       } else {
//         console.error('Failed to fetch notification data');
//       }
//     } catch (error) {
//       console.error('Error occurred while fetching notification data:', error);
//     }
//   };

//   return (
//     <div className="Notification">
//       <div className="Notification-details">
//         <div className="DonorName">{donorName}</div>
//         <div className="DonationAmount">{donationAmount}</div>
//         <div className="ProjectName">{projectName}</div>
//         <div className="Timestamp">{timestamp}</div>
//       </div>
//     </div>
//   );
// }

// export default Notification;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notifications.css';

function Notification() {
  const [notificationData, setNotificationData] = useState([]);

  useEffect(() => {
    fetchNotificationData();
  }, []);

  const fetchNotificationData = async () => {
    try {
      const response = await fetch('http://localhost:8100/api/notifications');

      if (response.ok) {
        const data = await response.json();
        setNotificationData(data);
      } else {
        console.error('Failed to fetch notification data');
      }
    } catch (error) {
      console.error('Error occurred while fetching notification data:', error);
    }
  };

  return (
    <div className="Notification">
      {notificationData.map((notification) => (
        <div className="Notification-details" key={notification.id}>
          <div className="DonorName">{notification.donorName}</div>
          <div className="DonationAmount">{notification.donationAmount}</div>
          <div className="ProjectName">{notification.projectName}</div>
          <div className="Timestamp">{notification.timestamp}</div>
        </div>
      ))}
    </div>
  );
}

export default Notification;