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
// http://localhost:8100/api/donationRoute

// import React, { useState, useEffect } from 'react';
// import Notification from '../../../Components/Notification/Notification';
// import { IoCheckmarkDoneCircle } from 'react-icons/io5';
// import axios from 'axios';
// import './Donor-transaction.css';

// const DonorTransaction = () => {
//   const [totalDonations, setTotalDonations] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [donatedAmount, setDonatedAmount] = useState(0);
//   const [campaignName, setCampaignName] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch total donations and total amount
//         const allDonationsResponse = await axios.get('/api/donations');
//         const allDonations = allDonationsResponse.data.data;
//         let totalDonationsCount = allDonations.length;
//         let totalAmountSum = allDonations.reduce((acc, donation) => acc + donation.amount, 0);

//         // Fetch specific donation details (example: first donation details)
//         const firstDonation = allDonations[0]; // Modify this based on your requirement
//         setTotalDonations(totalDonationsCount);
//         setTotalAmount(totalAmountSum);
//         setDonatedAmount(firstDonation.amount);

//         // Fetch campaign details using the campaign_id from the donation
//         const campaignResponse = await axios.get(`http://localhost:8100/api/donationRoute${firstDonation.campaign_id}`);
//         const campaign = campaignResponse.data.data[0]; // Assuming the API returns one campaign
//         setCampaignName(campaign.name);

//         // Fetch donation sum and count by donor ID
//         const sumAndCountResponse = await axios.get(`/api/donations/donation/sum/${firstDonation.userId}`);
//         const { sum, count } = sumAndCountResponse.data;
//         console.log(`Sum is: ${sum}, Count is: ${count}`); // Modify or display as needed
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         // Handle error state if required
//       }
//     };

//     // Call the fetchData function
//     fetchData();
//   }, []);

//   return (
//     <div className="Transaction-main-container container d-flex flex-column">
//       <div className="transaction-stats-main d-flex">
//         <div className="Total-donations">
//           <h6>Total Donations</h6>
//           <p>{totalDonations}</p>
//         </div>
//         <div className="Total-amount">
//           <h6>Total Amount</h6>
//           <p>${totalAmount}</p>
//         </div>
//       </div>

//       <Notification>
//         <p>
//           <IoCheckmarkDoneCircle className="TRANSACTION-IS-DONE-ICON" /> You donated ${donatedAmount} for{' '}
//           {campaignName}
//         </p>
//       </Notification>
//     </div>
//   );
// };

// export default DonorTransaction;

//

// const DonorTransaction = () => {
//   const [totalDonations, setTotalDonations] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [donatedAmount, setDonatedAmount] = useState(0);
//   const [campaignName, setCampaignName] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch total donations and total amount
//         const allDonationsResponse = await axios.get('http://localhost:8100/api/donationRoute');
//         const allDonations = allDonationsResponse.data.data;

//         let totalDonationsCount = allDonations.length;
//         let totalAmountSum = allDonations.reduce((acc, donation) => acc + donation.amount, 0);

//         setTotalDonations(totalDonationsCount);
//         setTotalAmount(totalAmountSum);

//         // Fetch specific donation details (example: first donation details)
//         const firstDonation = allDonations[0]; // Modify this based on your requirement
//         setDonatedAmount(firstDonation.amount);

//         // Fetch campaign details using the campaign_id from the donation
//         const campaignResponse = await axios.get(`/api/campaign/${firstDonation.campaign_id}`);
//         const campaign = campaignResponse.data.data[0]; // Assuming the API returns one campaign
//         setCampaignName(campaign.name);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         // Handle error state if required
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="Transaction-main-container container d-flex flex-column">
//       <div className="transaction-stats-main d-flex">
//         <div className="Total-donations">
//           <h6>Total Donations</h6>
//           <p>{totalDonations}</p>
//         </div>
//         <div className="Total-amount">
//           <h6>Total Amount</h6>
//           <p>${totalAmount}</p>
//         </div>
//       </div>

//       <Notification>
//         <p>
//           <IoCheckmarkDoneCircle className="TRANSACTION-IS-DONE-ICON" /> You donated ${donatedAmount} for{' '}
//           {campaignName}
//         </p>
//       </Notification>
//     </div>
//   );
// };

// export default DonorTransaction;



import React, { useContext } from 'react'
import Notification from '../../../Components/Notification/Notification'
import Transaction from '../../../Components/Transaction/Transaction.js'
import { useState, useEffect } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import {toast} from 'react-toastify'
import './Donor-transaction.css'
const DonorTransaction = () => {

  const {user, token} = useContext(AuthContext)
  const [data, setData] = useState([])
  const [first, setFirst] = useState({})
  const headers = {
    Authorization: `Bearer ${token}`,
   
  };
  const fetchData = async()=>{
    try{
    const response = await axios.get(`http://localhost:8100/api/donationRoute/donor/${user.id}`, { headers })
    if(response.status === 200){
      setData(response.data.data)
    }}
    catch(error){
      toast.error('something went wrong ERROR')
    }

  }

  useEffect(() => {
    const fetchFirst = async()=>{
      const res =await axios.get(`http://localhost:8100/api/donationRoute/donation/sum/${user.id}`, { headers })
      setFirst(res.data)}
    
    fetchFirst()
    fetchData()
  }, []);

  return (
    <>
    
    <div className='Transaction-main-container container d-flex flex-column'>
        <div className='transaction-stats-main d-flex '>
          <div className='Total-donations'>
            <h6>Total Donations</h6>
            <p>{first.count}</p>
          </div>
          <div className='Total-amount'>
          <h6>Total Amount</h6>
            <p>${first.sum}</p>
          </div>
        </div>
        <div className='notifications-wrapper-div '>

       {data.map((item)=>(
        <Notification key={item.id} amount={item.amount}
        campaignName={item.Campaign.campaign_name}>You</Notification>
        
 ))}
        </div>
    </div>
    </>
  )
}

export default DonorTransaction