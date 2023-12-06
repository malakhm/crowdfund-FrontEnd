// import React from 'react'
// import Notification from '../../../Components/Notification/Notification'
// import { IoCheckmarkDoneCircle } from "react-icons/io5";
// import './Donor-transaction.css'
// const DonorTransaction = () => {
//   return (
//     <div className='Transaction-main-container container d-flex flex-column'>
//         <div className='transaction-stats-main d-flex'>
//           <div className='Total-donations'>
//             <h6>Total Donations</h6>
//             <p>200</p>
//           </div>
//           <div className='Total-amount'>
//           <h6>Total Amount</h6>
//             <p>$2000</p>
//           </div>

//         </div>
//         <Notification>
//       <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
//         </Notification>

//         <Notification>
//       <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
//         </Notification>

//         <Notification>
//       <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
//         </Notification>

//         <Notification>
//       <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
//         </Notification>
//         <Notification>
//       <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
//         </Notification>
//         <Notification>
//       <p><IoCheckmarkDoneCircle className='TRANSACTION-IS-DONE-ICON'/> You</p>
//         </Notification>
    
//     </div>
//   )
// }

// export default DonorTransaction

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DonorTransaction = () => {
  const [donations, setDonations] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchDonorTransactions();
  }, []);

  const fetchDonorTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:8100/api/donor-transactions'); 
      const donorTransactions = response.data.data;

      setDonations(donorTransactions);
      calculateTotalDonation(donorTransactions);
      calculateTotalAmount(donorTransactions);
    } catch (error) {
      console.error('Error fetching donor transactions:', error);
    }
  };

  const calculateTotalDonation = (transactions) => {
    const total = transactions.reduce((sum, transaction) => sum + transaction.donation, 0);
    setTotalDonation(total);
  };

  const calculateTotalAmount = (transactions) => {
    const total = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    setTotalAmount(total);
  };

  return (
    <div>
      <h2>Donor Transactions</h2>
      <p>Total Donation: ${totalDonation}</p>
      <p>Total Amount: ${totalAmount}</p>
      <ul>
        {donations.map((transaction) => (
          <li key={transaction.id}>
            You donated ${transaction.donation} for {transaction.project} ({transaction.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorTransaction;