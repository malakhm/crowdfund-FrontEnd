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
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/esm/Button.js';
import { Link } from 'react-router-dom';
const CreatorProjects = () => {

  const {token, user} = useContext(AuthContext)
  const headers = {
    Authorization: `Bearer ${token}`,
    // Other headers if needed
  };
 
  const handleDelete = async ( campaign) => {
   
  
    Swal.fire({
      title: "Are you sure you want to delete?",
      icon: "question",
      iconHtml: "?",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      showCloseButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://localhost:8100/api/campaignRoute/deleteByName/${campaign}`, { headers });
          console.log(response.status)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } catch (err) {
          console.log(err);
          
        }
      }
    });
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
    
    <div className='Feed-main-Container container d-flex flex-column'>
    <div className='button-for-adding' ><Link to='/creator/add'><Button className='btn btn-warning'>Add A Project</Button></Link></div>
      
    <div className='main-Container-cards  d-flex justify-content-around'>
      {data.map((item)=>(
        <div className='Creator-main-Card '>
        <div className='creator-main-card-controls d-flex justify-self-between '>
        {item.isHidden || !item.isAccepted? <span className='text-warning class-status d-flex'>.</span> :<span className='text-success class-status d-flex'>.</span>}
           <div className='d-flex  justify-self-center'>
            <p className='creator-main-card-edit text-warning d-flex '><MdEditDocument className='document-icon'  /></p>
            <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' onClick={() => handleDelete(item.campaign_name)}/></p>
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
      </div>
    {/* <ul className='Pagination-Feed'>1.2.3.4</ul> */}
    </div>
    </>
  )
}

export default CreatorProjects
