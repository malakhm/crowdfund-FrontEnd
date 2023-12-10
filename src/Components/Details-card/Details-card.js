import React from 'react'
import './Details-card.css'
import Help from '../../Assets/help.webp'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BiSolidDonateHeart } from "react-icons/bi";
import Buttony from '../Button-yellow/Button';
import DonatePopper from '../../Popups/donate.js'
import { useLocation } from 'react-router-dom';
import {useState, useEffect, useContext } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Context/AuthContext.js';
import { toast } from 'react-toastify';
const DetailsCard = () => {
    
    const [donation, setDonation] = useState(0)

    //function to prompt for donation amount and save it in a state
    const handle = ()=>{
        Swal.fire({
            title: "How much do You want to donate?",
            icon: "question",
            input: "range",
            inputLabel: "amount",
            inputAttributes: {
              min: "100",
              max: "1500",
              step: "1"
            },
            inputValue: 100
          }).then(async(result) => {
            if (result.value) {
                setDonation(result.value)
                toast.success(`Nice! you donated $${result.value}`,'success')
                
                await fetchDonate()
                
               
            }
            else{
                toast.error(`Donation is not made`)

            }

        });
    
    }

    const location = useLocation()
    const {token, user} = useContext(AuthContext)
    const [data, setData] = useState('')
    const [donors, setDonors] = useState([])
    const { item } = location.state
    console.log(item)
    //calculate the percentage of collected amount
    const target = parseInt(item.target)
    const amount = parseInt(item.amount)
    const now = parseInt((amount / target) * 100)
    
    const headers = {
        Authorization: `Bearer ${token}`,
        // Other headers if needed
      };
    const fetchData = async() =>{
        try{
            const response = await axios.get(`http://localhost:8100/api/campaignRoute/getdays/${item.id}`, { headers })
            setData(response.data)
        }
       catch(error) {console.error(error)};

    }

    const fetchTotal = async() =>{
        try{
            const response = await axios.get(`http://localhost:8100/api/donationRoute/campaign/${item.id}`, { headers })
            setDonors(response.data)
        }
        catch(error){console.error('there is an error',error)}

    }

    const fetchDonate = async() =>{
        try{
            const response = await axios.post(`http://localhost:8100/api/donationRoute/` ,{
                userId:user.id,
                CampaignId:item.id,
                amount:donation
            })
           
            console.log(response.data)

            if(response.status === 401 || response.status ===403){
                return toast.error('You are not allowed to donate , You are a creator')
            }
        }
   
       catch(error) {toast.error('Donate again please !')};
            
        
    }

    useEffect(()=>{
        
        fetchTotal()
        fetchData()
      },[])
    return (
        <div className='Details-Card-Main-Container container d-flex justify-self-center'>
            <div className='Details-Card-left-side'>
                <h1>{item.campaign_name}</h1>
                <img src={item.campaign_image} />
                <p>{item.description}</p>
            </div>
            <div className='Details-Card-right-side'>
                <div className='Details-Card-Credits'><p>By</p><h4>{item.user.username}</h4></div>
                <p className='details-card-p days-left'>{data} Days left</p>
                <div className='Details-Card-stats'><p className='details-card-p'>${item.amount} raised of</p><h6>${item.target}</h6></div>
                <ProgressBar animated now={now} label={`${now}%`} variant='warning text-dark ' />
                <div className='Details-Card-Donate'>
                    <BiSolidDonateHeart className='Donate-icon' />
                    <p>{donors.length} People Donated</p>
                </div>
                <button className='btn btn-warning' onClick={handle}>Donate Now</button>

            </div>
        </div>
    )
}

export default DetailsCard
