import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import users_icon from "../Admin-assets/users-icon.png";
import DeletePopper from "../../../Popups/delete.js";
import Button from "react-bootstrap/Button";

const primary = {
  main: "#333333",
  light: "#f3c21b",
  dark: "#171717",
  shaded: "#CAC5C1",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: primary.light,
    backgroundColor: primary.dark,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: primary.shaded,
    backgroundColor: primary.main,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AdminRegRequests = () => {
  const [data, setData] = useState([]);

  const fetchPendingUsers = useCallback(async () => {
    try {
      await axios
        .get("http://localhost:8100/api/users/getPending/request")
        .then((response) => {
          // console.log("this is response in useeffect: ", response) // for checking
          setData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchPendingUsers();
  }, []);
  // console.log("this is data for rows: ", data);

  function createData(
    id,
    Username,
    Role,
    FirstName,
    LastName,
    Phone,
    Email,
    DOB,
    Gender,
    Action
  ) {
    return {
      id,
      Username,
      Role,
      FirstName,
      LastName,
      Phone,
      Email,
      DOB,
      Gender,
      Action,
    };
  }

  const rows = [];
  for (let i = 0; i < data.length; i++) {
    let dob = data[i].dob.split("T")[0]
    let role = "No Role";
    if (data[i].isCreator) {
      role = "Creator";
    }
    if (data[i].isDonor) {
      role = "Donor";
    }
    if (data[i].isCreator && data[i].isDonor) {
      // will not be reached normally
      role = "Cr & Dn";
    }
    rows.push(
      createData(
        data[i].id,
        data[i].username,
        role,
        data[i].first_name,
        data[i].last_name,
        data[i].phone_number,
        data[i].email,
        data[i].gender,
        dob
      )
    );
  }
  // console.log("these are rows: ", rows); //testing

  const handleAcceptUser = async (id) => {
    try {
      await axios.put(`http://localhost:8100/api/users/accept/${id}`);
    } catch (error) {
      console.log("error accepting user: ", error);
    } finally {
      fetchPendingUsers();
    }
  };

  return (
    <div className="Admin-Creators-table-main container d-flex flex-column ">
      <h1 className="donors-page-heading">
        <img
          className="users-icon-in-donors-page"
          src={users_icon}
          alt="users icon"
        />
        <p className="donors-page-heading-spacer"></p>
        <p className="donors-page-word">Registration Requests</p>
      </h1>
      <TableContainer
        component={Paper}
        className="Table-container-component-wrapper"
      >
        <Table
          sx={{ minWidth: 750 }}
          size="small"
          aria-label="customized table"
        >
          <TableHead>
            <StyledTableRow
              style={{ backgroundColor: "#f3c21b", color: "#333333" }}
            >
              <StyledTableCell>id </StyledTableCell>
              <StyledTableCell align="right">Username</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>

              <StyledTableCell align="right">FirstName</StyledTableCell>
              <StyledTableCell align="right">LastName</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">DOB</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>

                <StyledTableCell align="right">{row.Username}</StyledTableCell>
                <StyledTableCell align="right">{row.Role}</StyledTableCell>

                <StyledTableCell align="right">{row.FirstName}</StyledTableCell>
                <StyledTableCell align="right">{row.LastName}</StyledTableCell>
                <StyledTableCell align="right">{row.Email}</StyledTableCell>
                <StyledTableCell align="right">{row.DOB}</StyledTableCell>
                <StyledTableCell align="right">{row.Phone}</StyledTableCell>
                <StyledTableCell align="right">{row.Gender}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="success" onClick={() => handleAcceptUser(row.id)}>Accept</Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DeletePopper key={row.id} row={row} cb={fetchPendingUsers}/>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminRegRequests;
