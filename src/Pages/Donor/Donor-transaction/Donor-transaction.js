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
  const [stats, setStats] = useState({})
  const headers = {
    Authorization: `Bearer ${token}`,
    // Other headers if needed
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
    const fetchStats = async()=>{
      const res =await axios.get(`http://localhost:8100/api/donationRoute/donation/sum/${user.id}`, { headers })
      setStats(res.data)}
    // Save user to localStorage whenever it changes
    fetchStats()
    fetchData()
  }, []);
console.log(data)
console.log(stats)
  return (
    <>
    
    <div className='Transaction-main-container container d-flex flex-column'>
        <div className='transaction-stats-main d-flex '>
          <div className='Total-donations'>
            <h6>Total Donations</h6>
            <p>{stats.count}</p>
          </div>
          <div className='Total-amount'>
          <h6>Total Amount</h6>
            <p>${stats.sum}</p>
          </div>
        </div>
        <div className='notifications-wrapper-div '>

       {data.map((item)=>(
        <Notification key={item.id} amount={item.amount}
        campaignName={item.Campaign.campaign_name}>You</Notification>
        // {alert(data.amount)}
        // <Transaction key={data.id} amount={data.amount} project={data.Campaign.campaign_name}/>
 ))}
        </div>
    </div>
    </>
  )
}

export default DonorTransaction