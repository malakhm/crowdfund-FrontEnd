import React from 'react'
import Notification from '../../../Components/Notification/Notification.js'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useState, useEffect , useContext} from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import {toast} from 'react-toastify'
import '../../Creator/Creator-transaction/Creator-transaction.css'
const CreatorTransaction = () => {

  const {user, token} = useContext(AuthContext)
  const [data, setData] = useState([])
  const headers = {
    Authorization: `Bearer ${token}`,
    // Other headers if needed
  };
  const fetchData = async()=>{
    try{
    const response = await axios.get(`http://localhost:8100/api/campaignRoute/getById/${user.id}`, { headers })
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
    <div className='Transaction-main-container container d-flex flex-column'>
         <div className='notifications-wrapper-div '>
        
        {data.map((item)=>(
          console.log(item),
        <Notification
        key={item.id}
        amount={item.amount}
        campaignName={item.campaign_name}
        >
      <p>{item.user.username}</p>
        </Notification>
))}
        </div>
    </div>
  )
}

export default CreatorTransaction

