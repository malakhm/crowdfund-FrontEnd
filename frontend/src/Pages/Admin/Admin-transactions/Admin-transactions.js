import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Notification from "../../../Components/Notification/Notification.js";
const AdminTransactions = () => {

  const [donations, setDonations] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDonations = useCallback(async () => {
    //saves the function so there is no need for compiler to create new instance of it every time it needs it
    try {
      const donations_response = await axios.get(
        "http://localhost:8100/api/donationRoute/"
      ); //axios returns a response object with a data property, we then use .data to get it
      console.log(
        "This is the donations response: ",
        donations_response
      ); //for checking
      if (donations_response.data) {
        setDonations(donations_response.data.data); //returning the data as an array of objects
      }
    } catch (error) {
      console.error("error fetching donations: ", error);
    } finally {
      setLoading(false);
    }
  }, []); //this dependancy will specify on which change should the compiler recreate the function

  useEffect(() => {
    fetchDonations();
  }, []); //left dependancy array empty so it doesnt run when handle delete is ran

  console.log(
    "This is the donations in admin transactions: ",
    donations
  ); //for checking
  return (
    <div className="Notifications-main-container-div container d-flex justify-self-center flex-column">
      {!loading ? (donations ? donations.map((donation) => (
        <Notification donation={donation}>{donation.user.username}</Notification>
      )) : (
        <p>No donations found</p>
      )
      ) : (<p className="loading-creators">Loading Creators...</p>)}

    </div>
  );
};

export default AdminTransactions;
