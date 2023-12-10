import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './Campaign-card.css'
import Help from '../../Assets/help.webp'
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import ProgressBar from 'react-bootstrap/ProgressBar';

const  Cards = () => {
  const [campaignCard, setcampaignCard] = useState([])
  const target = 9000
  const amount = 4000
  const now = parseInt((amount/target)*100);

    useEffect(() => {
      const fetchCampaignCards = async () => {
        try {
          const response = await axios.get(`http://localhost:8100/api/campaignRoute/getAll`);
          setcampaignCard(response.data.data);
          // console.log("here", response.data)
        } catch (error) {
          // navigate('/user/login')
          console.error('Error fetching profile data:', error);
        }
      };
  
      fetchCampaignCards();
    }, []);

    return (  
        campaignCard.map((card) => {
          return(
          <div className="Campaign-Card-Component " key={card.id}>

            <div>
          <img variant="top" src={card.campaign_image} />
          <div className='Capmaign-Card-label'>
            <p className='start-card-label'><b>start date: {card.start_date}</b></p><p className='start-card-label'><b>end date: {card.end_date}</b></p>
          </div>    
          <div className='Campaign-Card-Basic-Info'> 
          <div className='Campaign-Card-project-title-with-icon'>
            <h3>Urgent Help</h3> 
            <IoBookmark/>
                  
          </div>
          <div className='Campaign-Card-Credits'><h4>By: {card.campaign_name}</h4></div>
          <div className='Campaign-Card-Descripton'>
            <p className='Campaign-p-description'>{card.description}</p>
            <ProgressBar animated now={now} label={`${now}%`} variant='warning text-dark'/>
            <div className='Campaign-Card-stats'><p>${card.amount} raised of</p><h6>${card.target}</h6></div>
          </div>
          </div> 
          </div>
          </div>
    
          ) 
        })
    )
}

export default Cards
