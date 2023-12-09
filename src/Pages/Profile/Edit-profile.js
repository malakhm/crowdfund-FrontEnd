import React from 'react'
import "./Profile.css";
import Buttony from '../../Components/Button-yellow/Button.js'
import { FaUserCircle } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect , useContext} from 'react';
import {useLocation , useNavigate} from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';
const EditProfile = () => {
  const location = useLocation();
  const id = location.state || {};
  const navigate = useNavigate()
  const {user, setUser} = useContext(AuthContext)
  if(!user) {
    toast.warning('Please login and try again !')
    navigate('/user/login')

  }
  const [first_name, setFirstName] = useState(user.first_name )
  const [last_name, setLastName] = useState(user.last_name)
  const [email, setEmail] = useState(user.email )
  const [gender, setGender] = useState(user.gender )
  const [dob, setDob] = useState(user.dob )
  const [phone, setPhone] = useState(user.phone_number )
  const [username, setUsername] = useState(user.username )
console.log(dob + 'dateeee')

//function to validate email
function isValidEmail(email) {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test if the input matches the regex
  return emailRegex.test(email);
}
// console.log(isValidEmail('malak@gmail.com'))

// console.log(isValidEmail('malak.gmail.com'))
  // SEND UPDATED DATA ON CLICK
  const handClickFetch = async()=>{
    try{
      if((phone.length > 8 || phone.length < 8) || isNaN(parseInt(phone))){
        return toast.error('Phone number format should be: (dd)ddd-ddd')
      }
      else if(isValidEmail(email) === false){
        return toast.error('email format should be:example@gmail.com')
      }
      else{

      
      const response = await axios.put(`http://localhost:8100/api/users/${user.id}`,{
        first_name,
        last_name,
        email,
        dob,
        gender,
        phone_number:phone,
        username
      });
      user.first_name = first_name
      user.last_name = last_name
      user.email = email
      user.dob = dob
      user.gender = gender
      user.phone_number = phone
      user.username = username
      
      if(response.status === 200){toast.success('profile edited successfully !')}
      
    navigate('/profile')}

    }
  
    catch(err){
      toast.error('something went wrong')
      navigate()

    }

  }

  return (
        <section className='section-profile'>
      <div className='Profile-img-section d-flex justify-content-between'>
        <div>
        <FaUserCircle className='profile-icon-main'/>

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
            <div className="right-column-profile  d-flex justify-content-around flex-column">
              <input
                  type='text'
                  placeholder='first name'
                  value={first_name}
                  className='p-profile bg-transparent text-warning '
                  onChange={(e) =>setFirstName(e.target.value)}
              />
              <input
                  type='text'
                  placeholder='last name'
                  value={last_name}
                  onChange={(e) =>setLastName(e.target.value)}
                  className='p-profile bg-transparent text-warning '
              />
              <input
                  type='date'
                  value={dob}
                  onChange={(e) =>setDob(e.target.value)}
                  className='p-profile bg-transparent text-warning '
              />
                 {/* Gender */}
            <Dropdown className="align-self-center">
              <Dropdown.Toggle variant="bg-warning text-white" id="dropdown-basic">
                Gender
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/Male" value="male" onClick={(e)=>setGender(e.target.innerText)} >Male</Dropdown.Item>
                <Dropdown.Item href="#/Female" value="female" onClick={(e)=>setGender(e.target.innerText)}>Female</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <div className='Contact-account-Profile'>
        <h2 className='h2-profile'>Contact and Account Info:</h2> 
        <div className="info-columns-profile">
          <div className="left-column-profile">
            <h4 className='h4-profile'>Phone:</h4>
            <h4 className='h4-profile'>Email:</h4>
            <h4 className='h4-profile'>Username:</h4>
          </div>
          <div className="right-column-profile d-flex justify-content-around flex-column">
            <input
                type='text'
                placeholder='(dd)ddd-ddd'
                value={phone}
                onChange={(e) =>setPhone(e.target.value)}
                className='p-profile bg-transparent text-warning  '
            />
            <input
                type='email'
                placeholder='example@email.com'
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                className='p-profile bg-transparent text-warning '
            />
            <input type='text'
                placeholder='unique username'
                value={username}
                onChange={(e) =>setUsername(e.target.value)}
                className='p-profile bg-transparent text-warning '
            />
            
          </div>

        </div>
      </div>
          <button className='btn btn-warning' onClick={handClickFetch}><b>Save Changes</b></button> 
    </section>
  )
}

export default EditProfile