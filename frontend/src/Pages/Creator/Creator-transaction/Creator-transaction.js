import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Transaction from "../../../Components/Transaction/Transaction.js";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "../../Creator/Creator-transaction/Creator-transaction.css";
const CreatorTransaction = () => {
  const [donations, setDonations] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDonations = useCallback(async () => {
    //saves the function so there is no need for compiler to create new instance of it every time it needs it
    try {
      const donations_response = await axios.get(
        "http://localhost:8100/api/donationRoute/", 
      ); //axios returns a response object with a data property, we then use .data to get it
      console.log("This is the donations response: ", donations_response); //for checking
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

  console.log("This is the donations in creator transactions: ", donations); //for checking

  return (
    <div className="Transaction-main-container-in-creator container d-flex flex-column">
      <div className="transaction-stats-main-in-creator">
        {!loading ? (
          donations ? (
            donations.map((donation) => (
              <Transaction donation={donation}>
                {donation.user.username}
              </Transaction>
            ))
          ) : (
            <p>No donations found</p>
          )
        ) : (
          <p className="loading-creators">Loading Creators...</p>
        )}
      </div>
    </div>
  );
};

export default CreatorTransaction;
