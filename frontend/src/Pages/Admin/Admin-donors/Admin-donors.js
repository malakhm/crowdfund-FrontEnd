import React /*, { useState, useEffect }*/ from "react";

import users_icon from "../Admin-assets/users-icon.png";
import DonorsTable from "../../../Components/Table-component/Table-donors/Table-donors";
import "./Admin-donors.css";

const AdminDonors = () => {
  return (
    <>
      <h1 className="donors-page-heading">
        <img
          className="users-icon-in-donors-page"
          src={users_icon}
          alt="users icon"
        />
        <p className="donors-page-heading-spacer"></p>
        <p className="donors-page-word">Donors</p>
      </h1>
      <DonorsTable />
    </>
  );
};

export default AdminDonors;
