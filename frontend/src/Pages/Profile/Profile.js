import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./Profile.css";
import ProfileImg from "../../Assets/ProfileImg.jpg";
import { useState , useEffect , useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/AuthContext'
const Profile = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:8100/api/users/${user.id}`);
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        // navigate('/user/login')
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
console.log("test",data)
  return (
    <section className="section-profile">
      {/* Profile content */}
      <div className="Profile-img-section">
        <img src={ProfileImg} alt="Profile" />
        <h2>Profile</h2>
      </div>
      
        <div className="pp-profile" key={data.id}>
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
              <p className="p-profile">{data.first_name}</p>
              <p className="p-profile">{data.last_name}</p>
              <p className="p-profile">{data.dob}</p>
              <p className="p-profile">{data.gender}</p>
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
                {data.isDonor ? 'Donor' : 'Project Creator'}
              </p>
              <p className="p-profile">{data.phone_number}</p>
              <p className="p-profile">{data.email}</p>
              <p className="p-profile">{data.username}</p>
            </div>
          </div>
        </div>
      </div>

   
       
        
  
    </section>
  );
};

export default Profile;