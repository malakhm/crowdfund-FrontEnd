import React, { useState, useEffect } from "react";
import axios from "axios";

import delete_icon from "../Assets/Icons/delete-icon.png"
import edit_icon from "../Assets/Icons/edit-icon.png"
import "./Table-donors.css";

const DonorsTable = () => {

  const [accepted_donors, setAcceptedDonors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const fetchAcceptedDonors = async () => {
      try {
        const accepted_donors_response = await axios.get("http://localhost:8100/api/users/getDonors/data"); //axios returns a response object with a data property, we then use .data to get it
        console.log("This is the accepted donors response: ", accepted_donors_response) //for checking
        setAcceptedDonors(accepted_donors_response.data) //returning the data as an array of objects
      } catch (error) {
        console.error("error fetching accepted donors: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAcceptedDonors();
  }, [])

  return (
    <>
      <table className="users-list-table">
        <thead className="table-row-head">
          <tr className="table-row-inside-head">
            <th className="table-column-id">ID</th>
            <th className="table-column-username">Username</th>
            <th className="table-column-first-name">First name</th>
            <th className="table-column-last-name">Last name</th>
            <th className="table-column-phone">Phone #</th>
            <th className="table-column-email">Email</th>
            <th className="table-column-dob">DOB</th>
            <th className="table-column-gender">Gender</th>
            <th className="table-column-edit-delete"></th>
          </tr>
        </thead>
        <tbody className="table-row-body">
          {loading ?
            ( <p className="loading-donors">Loading Donors...</p> ) //change classname later if needed
          : (
          accepted_donors.map((donor) => (
            <tr key={donor.id}>
              <td className="table-column-id">{donor.id}</td>
              <td className="table-column-username">{donor.username}</td>
              <td className="table-column-first-name">{donor.first_name}</td>
              <td className="table-column-last-name">{donor.last_name}</td>
              <td className="table-column-phone">{donor.phone_number}</td>
              <td className="table-column-email">{donor.email}</td>
              <td className="table-column-dob">{donor.dob}</td>
              <td className="table-column-gender">{donor.gender}</td>
              <td className="table-column-edit-delete-for-body">
                <img className="table-edit-icon" src = {edit_icon} alt = "edit-icon" />
                <p className="table-icon-spacer"> </p> {/* for the space between the icons */}
                <img className="table-delete-icon" src = {delete_icon} alt = "delete-icon" />
              </td>
            </tr>
          ))
          )}
        </tbody>
      </table>
    </>
  )
}

export default DonorsTable;