import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Add-campaign.css';
import Buttony from '../../../Components/Button-yellow/Button';
const AddCampaign = () => {
  return (
    <div className='campaign-wrapper container d-flex'>
    <div className="custom-container ">
        <div className="headings-title">New Campaign</div>
        {/* <div> */}
          <div className='campaigns-parent-div w-100'>
        <form className="container mt-5 w-25 d-flex gap-3 w-100">
          <div className='left-child-div w-50'>
     <div className="mb-4">
       <div className="input-group">
         <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="Campaign Name"
         />
       </div>
     </div>
     <div className="mb-4">
       <div className="input-group">
         <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="Active"
         />
       </div>
     </div>
     <div className="mb-4">
       <div className="input-group">
         <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="Start Date"
         />
       </div>
     </div>
     <div className="mb-3">
       <div className="input-group">
         <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="End Date"
         />
       </div>
     </div>
     <div className="mb-2">
       <div className="input-group">
         <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="Target"
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
           />
       </div>
     </div>
     <div className="mb-3">
       <div className="input-group">
       <div class="mb-3 text-white">
        <label for="formFile" class="form-label"></label>
        <input className="form-control bg-dark custom-input-loginPage text-white  p-3" type="file" id="formFile"/>
        </div>
       </div>
     </div>
     <div className="mb-3">
       <div className="input-group">
         <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white p-3"
           id="formGroupExampleInput"
           placeholder="Amount in $"
           />
       </div>
     </div>
     <div className="button123 w-50">
        </div>
     </div>
        <Buttony className='button123'><b>Save</b></Buttony>
           </form>
        </div>
        </div>
         </div>

  )
}

export default AddCampaign