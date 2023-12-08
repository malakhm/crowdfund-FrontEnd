import React from 'react'
import "./Profile.css";
import ProfileImg from "../../Assets/ProfileImg.jpg";
import Buttony from '../../Components/Button-yellow/Button.js'

const EditProfile = () => {
  return (
        <section className='section-profile'>
      <div className='Profile-img-section d-flex justify-content-between'>
        <div>
        <img src={ProfileImg} alt="Profile" />
        <h2 >Profile</h2>
        </div>
        </div>
        <div className='pp-profile'>
        <div className='General-INfo-Profile'>
          <h2 className='h2-profile'>General Info:</h2>
          <div className="info-columns-profile">
            <div className="left-column-profile">
              <h4 className='h4-profile'>First Name:</h4>
              <h4 className='h4-profile'>Last Name:</h4>
              <h4 className='h4-profile'>DOB:</h4>
              <h4 className='h4-profile'>Gender:</h4>
            </div>
            <div className="right-column-profile">
              <p className='p-profile'>Dana</p>
              <p className='p-profile'>Harb</p>
              <p className='p-profile'>18 March 2022</p>
              <p className='p-profile'>Female</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Contact-account-Profile'>
        <h2 className='h2-profile'>Contact and Account Info:</h2> 
        <div className="info-columns-profile">
          <div className="left-column-profile">
            <h4 className='h4-profile'>Role:</h4>
            <h4 className='h4-profile'>Phone:</h4>
            <h4 className='h4-profile'>Email:</h4>
            <h4 className='h4-profile'>Username:</h4>
          </div>
          <div className="right-column-profile">
            <p className='p-profile'>Donor</p>
            <p className='p-profile'>+961 76 076 487</p>
            <p className='p-profile'>malak@gmail.com</p>
            <p className='p-profile'>AnonymousFunder12</p>
          </div>

        </div>
      </div>
          <Buttony><b>Save Changes</b></Buttony> 
    </section>
  )
}

export default EditProfile