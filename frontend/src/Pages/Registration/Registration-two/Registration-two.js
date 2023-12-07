// import React from 'react'
// import Fund from "../22.png";
// import Buttony from "../../Components/Button-yellow/Button";
// const RegistrationTwo = () => {
//   return (
//     <div className="custom-container vh-100 w-100">
//     <div className="Logo-img">
//       <img src={Fund} alt="" className="reg-form-logo" />
//     </div>
//     <div className="headings-title">Registration</div>
//     <form className="container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width ">
//         <div className="mb-3">
//           <div className="input-group">
//             <span className="input-group-text bg-transparent text-white">
//               <i className="bi bi-person"></i>
//             </span>
//             <input
//               type="text"
//               className="form-control bg-transparent custom-input-loginPage text-white "
//               id="formGroupExampleInput"
//               placeholder="Enter your first name"
//             />
//           </div>
//         </div>

//         <div className="mb-3">
//           <div className="input-group">
//             <span className="input-group-text bg-transparent text-white">
//             <i className="bi bi-lock"></i>
//             </span>
//             <input
//               type="password"
//               className="form-control bg-transparent custom-input-loginPage text-white "
//               id="formGroupExampleInput"
//               placeholder="Enter your password"
//             />
//           </div>
//         </div>

//         <div className="mb-3">
//           <div className="input-group">
//             <span className="input-group-text bg-transparent text-white">
//             <i className="bi bi-lock"></i>
//             </span>
//             <input
//               type="password"
//               className="form-control bg-transparent custom-input-loginPage text-white "
//               id="formGroupExampleInput"
//               placeholder="Confirm your password"
//             />
//           </div>
//         </div>
//         <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
//           <Buttony><b>Submit</b></Buttony>
//           </div>
//         </form>
//     </div>
//   )
// }

// export default RegistrationTwo

// import React, { useState } from 'react';
// import Fund from "../22.png";
// import Buttony from "../../Components/Button-yellow/Button";

// const RegistrationTwo = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation and processing of username, password, and confirmPassword here

//     // Example validation: checking if password and confirmPassword match
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     // Perform other validation and processing as needed

//     // Submit the form data
//     console.log("Username:", username);
//     console.log("Password:", password);
//     console.log("Confirm Password:", confirmPassword);

//     // Clear the form fields
//     setUsername('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <div className="custom-container vh-100 w-100">
//       <div className="Logo-img">
//         <img src={Fund} alt="" className="reg-form-logo" />
//       </div>
//       <div className="headings-title">Registration</div>
//       <form
//         className="container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width"
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-3">
//           <div className="input-group">
//             <span className="input-group-text bg-transparent text-white">
//               <i className="bi bi-person"></i>
//             </span>
//             <input
//               type="text"
//               className="form-control bg-transparent custom-input-loginPage text-white"
//               id="formGroupExampleInput"
//               placeholder="Enter your first name"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="mb-3">
//           <div className="input-group">
//             <span className="input-group-text bg-transparent text-white">
//               <i className="bi bi-lock"></i>
//             </span>
//             <input
//               type="password"
//               className="form-control bg-transparent custom-input-loginPage text-white"
//               id="formGroupExampleInput"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="mb-3">
//           <div className="input-group">
//             <span className="input-group-text bg-transparent text-white">
//               <i className="bi bi-lock"></i>
//             </span>
//             <input
//               type="password"
//               className="form-control bg-transparent custom-input-loginPage text-white"
//               id="formGroupExampleInput"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
//           <Buttony type="submit">
//             <b>Submit</b>
//           </Buttony>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegistrationTwo;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fund from "../../22.png";
import Buttony from "../../../Components/Button-yellow/Button.js";

const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <Buttony type="submit">{children}</Buttony>
    </Link>
  );
};


const RegistrationTwo = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Call the onRegister function to register the user
    onRegister();
  };

  return (
    <div className="custom-container vh-100 w-100">
      <div className="Logo-img">
        <img src={Fund} alt="" className="reg-form-logo" />
      </div>
      <div className="headings-title">Registration</div>
      <form
        className="container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width"
        onSubmit={handleSubmit}
      >
                 <div className="mb-3">
           <div className="input-group">
             <span className="input-group-text bg-transparent text-white">
               <i className="bi bi-person"></i>
             </span>
            <input
              type="text"
              className="form-control bg-transparent custom-input-loginPage text-white"
              id="formGroupExampleInput"
              placeholder="Enter your first name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-transparent text-white">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control bg-transparent custom-input-loginPage text-white"
              id="formGroupExampleInput"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-transparent text-white">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control bg-transparent custom-input-loginPage text-white"
              id="formGroupExampleInput"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        

        <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
          {/* <Buttony type="submit">
            <b>Submit</b>
          </Buttony> */}
           <ButtonLink to="/some-page">
          <b>Submit</b>
        </ButtonLink>
        </div>
      </form>
    </div>
  );
};

export default RegistrationTwo;
