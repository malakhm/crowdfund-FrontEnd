import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import PendingCampaignCard from "../../../Components/Campaign-card/Pending-Campaign-card.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import { PaginationControl } from "react-bootstrap-pagination-control";
// import Button from "react-bootstrap/Button";
import { BsCheckCircleFill } from "react-icons/bs";
import campaign_req_icon from "../Admin-assets/add-post.png";
import { FaDeleteLeft } from "react-icons/fa6";
import "./Admin-post-requests.css";

const AdminRequests = () => {
  const [pending_campaigns, setPendingCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPendingCampaigns = useCallback(async () => {
    //saves the function so there is no need for compiler to create new instance of it every time it needs it
    try {
      const pending_campaigns_response = await axios.get(
        "http://localhost:8100/api/campaignRoute/getAllPending"
      ); //axios returns a response object with a data property, we then use .data to get it
      console.log(
        "This is the pending campaigns response: ",
        pending_campaigns_response
      ); //for checking
      if (pending_campaigns_response.data) {
        setPendingCampaigns(pending_campaigns_response.data.data); //returning the data as an array of objects
      }
    } catch (error) {
      console.error("error fetching pending campaigns: ", error);
    } finally {
      setLoading(false);
    }
  }, []); //this dependancy will specify on which change should the compiler recreate the function

  useEffect(() => {
    fetchPendingCampaigns();
  }, []);

  const handleAcceptClick = async (campaign) => {
    try {
      await axios.put(
        `http://localhost:8100/api/campaignRoute/accept/${campaign.campaign_name}`
      );
      fetchPendingCampaigns();
      console.log(
        "accept clicked !",
        campaign.isAccepted,
        campaign.campaign_name,
        campaign.id
      );
    } catch (error) {
      console.error("accept failed due to error:", error);
    }
  };

  const handleCampaignDelete = async (campaign) => {
    try {
      await axios.delete(
        `http://localhost:8100/api/campaignRoute/deleteByName/${campaign.campaign_name}`
      );
    } catch (error) {
      console.log("error deleting campaign: ", error);
    } finally {
      fetchPendingCampaigns();
    }
  };

  console.log(
    "this is pending campaigns in postrequests: ",
    loading,
    pending_campaigns
  );

  return (
    <div className="campaign-main-admin container d-flex flex-column">
      <h1 className="rquests-page-heading">
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
  );
};

export default AdminRequests;