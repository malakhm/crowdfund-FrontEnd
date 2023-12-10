import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext.js';
import axios from 'axios';
import {toast} from 'react-toastify'
import Notification from '../../Components/Notification/Notification'
import '../Creator/Creator-transaction/Creator-transaction.css'
function Notifications() {
  const {user, token} = useContext(AuthContext)
  const [data, setData] = useState([])
  const headers = {
    Authorization: `Bearer ${token}`,
    // Other headers if needed
  };
  const fetchData = async()=>{
    try{
    const response = await axios.get(`http://localhost:8100/api/donationRoute`, { headers })
    if(response.status === 200){
      setData(response.data.data)
    }}
    catch(error){
      toast.error('something went wrong ERROR')
    }

  }

  useEffect(() => {
 
    fetchData()
  }, []);
console.log(data)

  return (

    <div className='Transaction-main-container container d-flex justify-self-center flex-column'>
        <div className='notifications-wrapper-div '>

          {data.map((item)=>(
          <Notification key={item.id} amount={item.amount}
          campaignName={item.Campaign.campaign_name}>{item.user.username}</Notification>

          ))}
 </div>
      
     
      
   
   
    </div>
  )
}

export default Notifications
