import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import PendingCampaignCard from "../../../Components/Campaign-card/Pending-Campaign-card.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import { PaginationControl } from "react-bootstrap-pagination-control";
// import Button from "react-bootstrap/Button";
import { BsCheckCircleFill } from "react-icons/bs";
import campaign_req_icon from "../Admin-assets/add-post.png";
import { FaDeleteLeft } from "react-icons/fa6";
const  AdminRequests = () => {


  return (

    <div className='campaign-main-admin container d-flex flex-column'>
    <h1 className="donors-page-heading ">
        <img
          className="campaign-icon-in-requests-page"
          src={campaign_req_icon}
          alt="campaign icon"
        />
        <p className="donors-page-heading-spacer"></p>
        <p className="donors-page-word">Campaign Requests</p>
      </h1>
      <div className="campaign-main-Container container d-flex ">
        {!loading ? (
          pending_campaigns ? (
            pending_campaigns.map((campaign, campaign_name) => (
              <section key={campaign_name} className="Creator-main-Card ">
                <div className="creator-main-card-controls d-flex justify-self-center ">
                  <p className="creator-main-card-edit text-success d-flex ">
                    <BsCheckCircleFill
                      onClick={() => handleAcceptClick(campaign)}
                      className="document-icon"
                    />
                  </p>

                  <p className="creator-main-card-delete text-danger d-flex">
                    <FaDeleteLeft
                      onClick={() => handleCampaignDelete(campaign)}
                      className="document-icon"
                    />
                  </p>
                </div>
                <PendingCampaignCard
                  key={campaign.campaign_name}
                  campaign={campaign}
                />
              </section>
            ))
          ) : (
            <p>No pending campaigns found</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>


  )
}

export default AdminRequests;
