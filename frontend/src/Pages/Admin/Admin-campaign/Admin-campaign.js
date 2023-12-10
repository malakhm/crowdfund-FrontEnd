import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import AcceptedCampaignCard from "../../../Components/Campaign-card/Accepted-Campaign-card.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin-campaign.css";
// import { PaginationControl } from "react-bootstrap-pagination-control";
// import Button from "react-bootstrap/Button";
import { FaDeleteLeft } from "react-icons/fa6";
import campaign_icon from "../Admin-assets/campaign.png";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
const AdminCampaign = () => {
  const [accepted_campaigns, setAcceptedCampaigns] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAcceptedCampaigns = useCallback(async () => {
    //saves the function so there is no need for compiler to create new instance of it every time it needs it
    try {
      const accepted_campaigns_response = await axios.get(
        "http://localhost:8100/api/campaignRoute/getAllAccepted"
      ); //axios returns a response object with a data property, we then use .data to get it
      // console.log(
      //   "This is the accepted campaigns response: ",
      //   accepted_campaigns_response
      // ); //for checking
      if (accepted_campaigns_response.data) {
        setAcceptedCampaigns(accepted_campaigns_response.data.data); //returning the data as an array of objects
      }
    } catch (error) {
      console.error("error fetching accepted campaigns: ", error);
    } finally {
      setLoading(false);
    }
  }, []); //this dependancy will specify on which change should the compiler recreate the function

  useEffect(() => {
    fetchAcceptedCampaigns();
  }, []);

  const handleCampaignHideClick = async (campaign) => {
    try {
      await axios.put(
        `http://localhost:8100/api/campaignRoute/hide/${campaign.campaign_name}`
      );
      fetchAcceptedCampaigns();
      // console.log("hide clicked !", campaign.isHidden, campaign.campaign_name, campaign.id);
    } catch (error) {
      console.error("hide failed due to error:", error);
    }
  };

  const handleCampaignUnhideClick = async (campaign) => {
    try {
      await axios.put(
        `http://localhost:8100/api/campaignRoute/unhide/${campaign.campaign_name}`
      );
      fetchAcceptedCampaigns();
      // console.log("unhide clicked !", campaign.isHidden, campaign.campaign_name, campaign.id);
    } catch (error) {
      console.error("unhide failed due to error:", error);
    }
  };

  const handleCampaignDelete = async (campaign) => {
    try {
      await axios.delete(`http://localhost:8100/api/campaignRoute/deleteByName/${campaign.campaign_name}`);
    } catch (error) {
      console.log("error deleting campaign: ", error);
    } finally {
      fetchAcceptedCampaigns();
    }
  };

  return (
    <>
      <div className="campaign-main-admin container d-flex flex-column">
        <h1 className="donors-page-heading">
          <img
            className="campaign-icon-in-campaign-page"
            src={campaign_icon}
            alt="campaign icon"
          />
          <p className="donors-page-heading-spacer"></p>
          <p className="donors-page-word">Campaigns</p>
        </h1>
        <div className="campaign-main-Container container d-flex ">
          <div className="Creator-main-Card ">
            <div className="creator-main-card-controls d-flex justify-self-center ">
              {!loading ? (
                accepted_campaigns.map((campaign, campaign_name) => {
                  return campaign.isHidden ? (
                    <section key={campaign_name}>
                      <p
                      className="creator-main-card-edit text-warning d-flex "
                      >
                        <FaRegEyeSlash
                          className="document-icon"
                          onClick={() => handleCampaignUnhideClick(campaign)}
                        />
                      </p>
                      <p className="creator-main-card-delete text-danger d-flex">
                        <FaDeleteLeft
                          className="document-icon"
                          onClick={ () => handleCampaignDelete(campaign)}
                        />
                      </p>
                      <AcceptedCampaignCard
                        key = {campaign.campaign_name}
                        campaign = {campaign}
                      />
                    </section>
                  ) : (
                    <section key={campaign_name}>
                      <p
                        className="creator-main-card-edit text-warning d-flex"
                      >
                        <FaRegEye
                          className="document-icon"
                          onClick={() => handleCampaignHideClick(campaign)}
                        />
                      </p>
                      <p className="creator-main-card-delete text-danger d-flex">
                        <FaDeleteLeft
                          className="document-icon"
                          onClick={ () => handleCampaignDelete(campaign)}
                        />
                      </p>
                      <AcceptedCampaignCard
                        key = {campaign.campaign_name}
                        campaign = {campaign}
                      />
                    </section>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCampaign;
