
import React from "react";
import { Link } from "react-router-dom";
import "./Transaction.css";

const Transaction = ({ children, donation }) => {

  let time_passed = (Date.now() - Date.parse(donation.createdAt));

  if (time_passed < 60000) {
    time_passed = String(parseInt((Date.now() - Date.parse(donation.createdAt))/1000)) + " seconds ago";
  }
  else if (time_passed < 3600000) {
    time_passed = String(parseInt((Date.now() - Date.parse(donation.createdAt))/60000)) + " minutes ago";
  }
  else if (time_passed < 86400000) {
    time_passed = String(parseInt((Date.now() - Date.parse(donation.createdAt))/3600000)) + " hours ago";
  }
  else if (time_passed < 2592000000) {
    time_passed = String(parseInt((Date.now() - Date.parse(donation.createdAt))/86400000)) + " days ago";
  }
  else {
    time_passed = String(parseInt((Date.now() - Date.parse(donation.createdAt))/2592000000)) + " months ago";
  }

console.log("this is time: ", time_passed)

  return (
    <div className="Transaction-component-main container d-flex justify-self-center">
      <p className="donation-id-in-transactions">#{donation.id}</p>
      <div className="single-notification container d-flex justify-self-center">
        <p className="amount-of-money-transaction">
          {children}
        </p>
        donated
        <p className="amount-of-money-transaction">${donation.amount}</p>
        for the campaign
        <p className="amount-of-money-transaction">
          {donation.Campaign.campaign_name}
        </p>
        created by
        <p className="amount-of-money-transaction">
          {donation.creator.username}
        </p>
      </div>
      <p className="donation-date-in-transactions-in-creator">
        <p>{time_passed}</p>
      </p>
    </div>
  );
};

export default Transaction;