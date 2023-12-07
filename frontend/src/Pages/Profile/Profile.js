import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./Profile.css";
import ProfileImg from "../../Assets/ProfileImg.jpg";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:8100/api/users/');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  if (profileData.length === 0) {
    return <div>Loading...</div>;
  }
console.log("test",profileData)
  return (
    <section className="section-profile">
      {/* Profile content */}
      <div className="Profile-img-section">
        <img src={ProfileImg} alt="Profile" />
        <h2>Profile</h2>
      </div>
      {profileData && profileData.data.map(
        (profile, index) => (
        <div className="pp-profile" key={index}>
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
                <p className="p-profile">{profile.first_name}</p>
                <p className="p-profile">{profile.last_name}</p>
                <p className="p-profile">{profile.dob}</p>
                <p className="p-profile">{profile.gender}</p>
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
                  {profile.isDonor ? 'Donor' : 'Non-Donor'}
                </p>
                <p className="p-profile">{profile.phone_number}</p>
                <p className="p-profile">{profile.email}</p>
                <p className="p-profile">{profile.username}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Profile;