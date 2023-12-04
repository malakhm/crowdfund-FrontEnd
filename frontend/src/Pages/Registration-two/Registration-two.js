import React from 'react'
import Fund from "../22.png";
import Buttony from "../../Components/Button-yellow/Button";
const RegistrationTwo = () => {
  return (
    <div className="custom-container vh-100 w-100">
    <div className="Logo-img">
      <img src={Fund} alt="" className="reg-form-logo" />
    </div>
    <div className="headings-title">Registration</div>
    <form className="container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width ">
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-transparent text-white">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control bg-transparent custom-input-loginPage text-white "
              id="formGroupExampleInput"
              placeholder="Enter your first name"
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
              className="form-control bg-transparent custom-input-loginPage text-white "
              id="formGroupExampleInput"
              placeholder="Enter your password"
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
              className="form-control bg-transparent custom-input-loginPage text-white "
              id="formGroupExampleInput"
              placeholder="Confirm your password"
            />
          </div>
        </div>
        <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
          <Buttony><b>Submit</b></Buttony>
          </div>
        </form>
    </div>
  )
}

export default RegistrationTwo