import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import delete_icon from "../Assets/Icons/delete-icon.png"
import edit_icon from "../Assets/Icons/edit-icon.png"
import "./Table-creators.css";

const CreatorsTable = () => {

  const [accepted_creators, setAcceptedCreators] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAcceptedCreators = useCallback(async () => { //saves the function so there is no need for compiler to create new instance of it every time it needs it
    try {
      const accepted_creators_response = await axios.get("http://localhost:8100/api/users/getCreators/data"); //axios returns a response object with a data property, we then use .data to get it
      console.log("This is the accepted creators response: ", accepted_creators_response) //for checking
      if (accepted_creators_response.data) {
        setAcceptedCreators(accepted_creators_response.data) //returning the data as an array of objects
      }
      else {
        setAcceptedCreators({ //dummy data for not found, to avoid error
          id: 0,
          username: 'no',
          first_name: 'creator',
          last_name: "found",
          phone_number: 0,
          email: "no creators found",
          dob: "0000/00/00",
          gender: "null"
        });
        console.log("This is dummy data: ", accepted_creators)
      }
    } catch (error) {
      console.error("error fetching accepted creators: ", error);
    } finally {
      setLoading(false);
    }
  }, []); //this dependancy will specify on which change should the compiler recreate the function

  useEffect (() => {
    fetchAcceptedCreators();
  }, []) //left dependancy array empty so it doesnt run when handle delete is ran

  const handleCreatorDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8100/api/users/${id}`);
    } catch (error) {
      console.log("error deleting creator: ", error);
    } finally {
      fetchAcceptedCreators();
    }
  };

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
            ( <p className="loading-creators">Loading Creators...</p> ) //change classname later if needed
          : (
          accepted_creators.map((creator) => (
            <tr key={creator.id}>
              <td className="table-column-id">{creator.id}</td>
              <td className="table-column-username">{creator.username}</td>
              <td className="table-column-first-name">{creator.first_name}</td>
              <td className="table-column-last-name">{creator.last_name}</td>
              <td className="table-column-phone">{creator.phone_number}</td>
              <td className="table-column-email">{creator.email}</td>
              <td className="table-column-dob">{creator.dob}</td>
              <td className="table-column-gender">{creator.gender}</td>
              <td className="table-column-edit-delete-for-body">
                <img className="table-edit-icon" src = {edit_icon} alt = "edit-icon" />
                <p className="table-icon-spacer"> </p> {/* for the space between the icons */}
                <img className="table-delete-icon" src = {delete_icon} alt = "delete-icon" onClick={() => handleCreatorDelete(creator.id)} />
              </td>
            </tr>
          ))
          )}
        </tbody>
      </table>
    </>
  )
}

export default CreatorsTable;