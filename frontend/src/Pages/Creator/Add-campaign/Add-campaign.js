import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Add-campaign.css';
import Buttony from '../../../Components/Button-yellow/Button';
import axios from 'axios'
import { useState } from 'react';
const AddCampaign = () => {
  const [campaign_name, setCampaignName] = useState("")
  const [description, setDescription] = useState("")
  const [campaign_image, setCampaignImage] = useState("")
  const [target, setTarget] = useState("")
  const [start_date, setStartDate] = useState("")
  const [end_date, setEndDate] = useState("")
  const [UserId, setUserId] = useState("")
  
  const handleSubmit = async (e) => {

    e.preventDefault();
try {

    const formData = new FormData();
  
    formData.append("campaign_name", campaign_name)
    formData.append("description", description)
    formData.append("campaign_image", campaign_image)
    formData.append("target", target)
    formData.append("start_date", start_date)
    formData.append("end_date", end_date)
    formData.append("UserId", UserId)

    const response = await axios.post("http://localhost:8100/api/campaignRoute/post",formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(response);
}
catch (error){
  console.log(error)
}

  }


  return (
    <div className='campaign-wrapper container d-flex'>
    <div className="custom-container ">
        <div className="headings-title">New Campaign</div>
          <div className='campaigns-parent-div w-100'>
        <form onSubmit={handleSubmit} className="form-add-project container mt-5 w-25 d-flex gap-3 w-100">
          <div className='left-child-div w-50'>
     <div className="mb-4">
       <div className="input-group">
         <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="Campaign Name"
           value={campaign_name}
           onChange={(e) => setCampaignName(e.target.value)}
         />
       </div>
     </div>
     <div className="mb-4">
       <div className="input-group">
         <input
           type="date"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="Start Date"
           value={start_date}
           onChange={(e) => setStartDate(e.target.value)}
         />
       </div>
     </div>
     <div className="mb-3">
       <div className="input-group">
         <input
           type="date"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="End Date"
           value={end_date}
           onChange={(e) => setEndDate(e.target.value)}
         />
       </div>
     </div>
     <div className="mb-2">
       <div className="input-group">
         <input
           type="number"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="Target"
           value={target}
           onChange={(e) => setTarget(e.target.value)}
         />
       </div>
     </div>
     </div>
     <div className='right-child-div w-50'>
     <div className="mb-3 h-50">
       <div className="input-group h-100">
         <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="Add Description"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           />
       </div>
     </div>
     <div className="mb-3">
       <div className="input-group">
       <div class="mb-3 text-white">
        <label for="formFile" class="form-label"></label>
        <input className="form-control bg-dark custom-input-loginPage text-white  p-3" type="file" id="formFile"
        onChange={(e) => setCampaignImage(e.target.files[0])}
        />
        </div>
       </div>
     </div>
     <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="User Id"
            value={UserId}
            onChange={(e) => setUserId(e.target.value)}
      />

     </div>
        <Buttony><b>Save</b></Buttony>
           </form>
        </div>
        </div>
         </div>

  )
}

export default AddCampaign