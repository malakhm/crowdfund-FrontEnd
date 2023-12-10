import React from 'react'
import Cards from '../../Components/Campaign-card/Campaign-card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}  from 'react-router-dom'; 
import  { useState , useEffect, useContext} from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import './Feed.css'
import { toast } from 'react-toastify';
const Feed = () => {
  const {token} = useContext(AuthContext)
  const [data, setData] = useState([])
  const headers = {
    Authorization: `Bearer ${token}`,
    // Other headers if needed
  };
  const fetchData = async ()=>{
    try{
      const response = await axios.get(`http://localhost:8100/api/campaignRoute/getAllVisible`,{ headers })
    setData(response.data.data)
    

    }catch(err){
      toast.warning('no campaigns Found')
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
      console.log(item.user),
      
        <Link to="/details" state= {{item:item}}style={{ textDecoration: 'none' ,color:'#333333'}}> 
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
        </Link>
    ))
   
  }



    {/* <ul className='Pagination-Feed'>1.2.3.4</ul> */}
    </div>

    </>
  )
}

export default Feed
