import React from 'react'
import Cards from '../../../Components/Campaign-card/Campaign-card.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {AuthContext} from '../../../Context/AuthContext.js'
import { MdEditDocument } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import './Creator-projects.css'
import '../../Feed/Feed.css'

const CreatorProjects = () => {
  const {token, user} = useContext(AuthContext)
  const headers = {
    Authorization: `Bearer ${token}`,
    // Other headers if needed
  };

  //delcare state for data
  const [data, setData] = useState([])
  const fetchData = async() => {
    try{
      const response = await axios.get(`http://localhost:8100/api/campaignRoute/getById/${user.id}`, { headers })
      setData(response.data.data)
      
    }
    catch(error)
    {
      console.log(error)
    }
  
  }

  useEffect(()=>{
    fetchData()
  },[])
  console.log(data)
  return (
    <>
    
    <div className='Feed-main-Container container d-flex '>
    
      {data.map((item)=>(
        <div className='Creator-main-Card '>
        <div className='creator-main-card-controls d-flex justify-self-between '>
        {item.isHidden ? <span className='text-warning class-status d-flex'>.</span> :<span className='text-success class-status d-flex'>.</span>}
           <div className='d-flex  justify-self-center'>
            <p className='creator-main-card-edit text-warning d-flex '><MdEditDocument className='document-icon'/></p>
            <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon'/></p>
            </div>
        </div>
        <Cards
            key={item.id}
            campaign_name = {item.campaign_name}
            description = {item.description}
            image = {item.campaign_image}
            creator = {item.user.username}//should be item.user.username
            start_date = {item.start_date}
            end_date = {item.end_date}
            amount = {item.amount}
            target = {item.target}
        />
      </div>
     

      ))}
      
    {/* <ul className='Pagination-Feed'>1.2.3.4</ul> */}
    </div>
    </>
  )
}

export default CreatorProjects
