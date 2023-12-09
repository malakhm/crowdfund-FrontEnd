import React from 'react';
import "./Profile.css";
import ProfileImg from "../../Assets/ProfileImg.jpg";
import { useState , useEffect , useContext} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from '../../Context/AuthContext'
import { FaUserCircle } from "react-icons/fa";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

//function to split the date from time
const splitDate = user.dob.split('T')[0];


 

 
console.log("test",user)
  return (
    <>
   
    <section className="section-profile container">
      {/* Profile content */}
      <div className="Profile-img-section">
        {/* <img src={ProfileImg} alt="Profile" /> */}
        <FaUserCircle className='profile-icon-main'/>
        <h2>Profile</h2>
        <Link to='/edit/profile' state={{id:user.id}}><button className='btn btn-warning button-edit-profile'>Edit Profile</button></Link>
      </div>
      
        <div className="pp-profile" key={user.id}>
        <div className="General-INfo-Profile">
          <h2 className="h2-profile">General Info:</h2>
          <div className="info-columns-profile">
            <div className="left-column-profile">
              <h4 className="h4-profile">First Name:</h4>
              <h4 className="h4-profile">Last Name:</h4>
              <h4 className="h4-profile">DOB:</h4>
              <h4 className="h4-profile">Gender:</h4>
            </div>
            <div className="right-column-profile">
              <p className="p-profile">{user.first_name}</p>
              <p className="p-profile">{user.last_name}</p>
              <p className="p-profile">{splitDate}</p>
              <p className="p-profile">{user.gender}</p>
            </div>
          </div>
        </div>
        <div className="Contact-account-Profile">
          <h2 className="h2-profile">Contact and Account Info:</h2>
          <div className="info-columns-profile">
            <div className="left-column-profile">
              <h4 className="h4-profile">Role:</h4>
              <h4 className="h4-profile">Phone:</h4>
              <h4 className="h4-profile">Email:</h4>
              <h4 className="h4-profile">Username:</h4>
            </div>
            <div className="right-column-profile">
              <p className="p-profile">
                {user.isDonor ? 'Donor' : 'Project Creator'}
              </p>
              <p className="p-profile">{user.phone_number}</p>
              <p className="p-profile">{user.email}</p>
              <p className="p-profile">{user.username}</p>
            </div>
          </div>
        </div>
      </div>

   
       
        
  
    </section>
    </>
  );
};

export default Profile;