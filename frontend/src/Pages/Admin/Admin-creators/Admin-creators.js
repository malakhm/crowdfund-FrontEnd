import React /*, { useState, useEffect }*/ from "react";

import users_icon from "../Admin-assets/users-icon.png";
import CreatorsTable from "../../../Components/Table-component/Table-creators/Table-creators";
import "./Admin-creators.css";

const AdminCreators = () => {
  return (
    <>
      <h1 className="creators-page-heading">
        <img
          className="users-icon-in-creators-page"
          src={users_icon}
          alt="users icon"
        />
        <p className="creators-page-heading-spacer"></p>
        <p className="creators-page-word">Creators</p>
      </h1>
      <CreatorsTable />
    </>
  );
};

export default AdminCreators;