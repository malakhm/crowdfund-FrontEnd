import React, {useContext} from "react";

import "./Campaign-card.css";
import Help from "../../Assets/help.webp";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import ProgressBar from "react-bootstrap/ProgressBar";
import { UserContext } from "../../Context/userContext";

const Cards = ({ accepted_campaign }) => {
  const { users } = useContext(UserContext);
  const target = accepted_campaign.target;
  const amount = accepted_campaign.amount;
  const now = parseInt((amount / target) * 100);
  // console.log(`this is theusers in cards: ${users}`) //for testing
  return (
    <div className="Campaign-Card-Component">
      <img variant="top" src={Help} />
      <div className="Capmaign-Card-label">
        <p className="start-card-label">
          Starts by:<b>{accepted_campaign.start_date}</b>
        </p>
        <p className="start-card-label">
          Ends by:<b>{accepted_campaign.end_date}</b>
        </p>
      </div>
      <div className="Campaign-Card-Basic-Info">
        <div className="Campaign-Card-project-title-with-icon">
          <h3>{accepted_campaign.campaign_name}</h3>
          <IoBookmark />
        </div>
        <div className="Campaign-Card-Credits">
          <p>By</p>
          {users.map((user)=> {
            if (user.isCreator && user.id === accepted_campaign.userId) {
              return <h4 key={user.id}>{user.username}</h4>
            }
          })}
        </div>
        <div className="Campaign-Card-Descripton">
          <p className="Campaign-p-description">
            {accepted_campaign.description}
          </p>
          <ProgressBar
            animated
            now={now}
            label={`${now}%`}
            variant="warning text-dark"
          />
          <div className="Campaign-Card-stats">
            <p>${amount} raised of</p>
            <h6>${target}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
