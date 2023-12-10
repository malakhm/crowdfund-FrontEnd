import React from 'react'

import './Campaign-card.css'
import Help from '../../Assets/help.webp'
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import ProgressBar from 'react-bootstrap/ProgressBar';

const  Cards = (props) => {
  const target = parseInt(props.target)
  const amount = parseInt(props.amount)
    const now = parseInt((amount/target)*100)
    console.log(props.creator)
  return (

        <div className="Campaign-Card-Component">
      <img variant="top" src={props.image} />
      {console.log(props.image)}
      <div className='Capmaign-Card-label'>
        <p className='start-card-label'>start date :<b>{props.start_date}</b></p><p className='start-card-label'>end date :<b>{props.end_date}</b></p>
      </div>    
      <div className='Campaign-Card-Basic-Info'> 
      <div className='Campaign-Card-project-title-with-icon'>
        <h3>{props.campaign_name}</h3> 
        <IoBookmark/>
               
      </div>
      <div className='Campaign-Card-Credits'><p>By</p><h4>{props.creator}</h4></div>
      <div className='Campaign-Card-Descripton'>
        <p className='Campaign-p-description'>{props.description}</p>
        <ProgressBar animated now={now} label={`${now}%`} variant='warning text-dark'/>
        <div className='Campaign-Card-stats'><p>${props.amount} raised of</p><h6>${props.target}</h6></div>
      </div>

      

    

      </div> 
      </div>

  )
}

export default Cards
