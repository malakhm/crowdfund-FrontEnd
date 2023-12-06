import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import users_icon from "../Admin-assets/users-icon.png";
import DeletePopper from '../../../Popups/delete.js';
import EditPopper from '../../../Popups/edituser.js';
import './Admin-creators.css'




  const primary = {
    main: '#333333',
    light: '#f3c21b',
    dark: '#171717',
    shaded: '#CAC5C1',
  };
  
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
     color: primary.light,
     backgroundColor: primary.dark
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: primary.shaded,
      backgroundColor: primary.main,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

function createData(id, Username, FirstName, LastName, Phone, Email, DOB, Gender, Action) {
  return { id, Username, FirstName, LastName, Phone, Email, DOB, Gender, Action };
}


const AdminCreators = () => {

const [accepted_creators, setAcceptedCreators] = useState(null);
const [loading, setLoading] = useState(true);

const fetchAcceptedCreators = useCallback(async () => { //saves the function so there is no need for compiler to create new instance of it every time it needs it
  try {
    const accepted_creators_response = await axios.get("http://localhost:8100/api/users/getCreators/data"); //axios returns a response object with a data property, we then use .data to get it
    console.log("This is the accepted creators response: ", accepted_creators_response) //for checking
    if (accepted_creators_response.data) {
      setAcceptedCreators(accepted_creators_response.data) //returning the data as an array of objects
    }
  } catch (error) {
    console.error("error fetching accepted creators: ", error);
    setLoading(false);
  } finally {
    setLoading(false);
  }
}, []); //this dependancy will specify on which change should the compiler recreate the function

useEffect (() => {
  fetchAcceptedCreators();
}, []) //left dependancy array empty so it doesnt run when handle delete is ran


const handleCreatorDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8100/api/users/${id}`);
  } catch (error) {
    console.log("error deleting creator: ", error);
  } finally {
    fetchAcceptedCreators();
  }
};

const handleCreatorEdit = async (id) => {
  try {
    await axios.put(`http://localhost:8100/api/users/${id}`);
  } catch (error) {
    console.log("error editing creator: ", error);
  } finally {
    fetchAcceptedCreators();
  }
};
  return (
    <div className='Admin-Creators-table-main container d-flex flex-column '>
       <h1 className="donors-page-heading">
        <img
          className="users-icon-in-donors-page"
          src={users_icon}
          alt="users icon"
        />
        <p className="donors-page-heading-spacer"></p>
        <p className="donors-page-word">Creators</p>
      </h1>
    <TableContainer component={Paper} className='Table-container-component-wrapper'>
      <Table sx={{ minWidth: 750 }} size="small" aria-label="customized table">
        <TableHead>
          <StyledTableRow  style={{backgroundColor:'#f3c21b', color: '#333333'}}>
            <StyledTableCell>id </StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">FirstName</StyledTableCell>
            <StyledTableCell align="right">LastName</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">    
            </StyledTableCell>
            <StyledTableCell align="right"> 
            </StyledTableCell>


          </StyledTableRow>
        </TableHead>
        <TableBody>
        {!loading ?
          ( accepted_creators ?
            accepted_creators.map((creator) =>(
            <TableRow
              key={creator.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {creator.id}
              </StyledTableCell>
        
              <StyledTableCell align="right">{creator.username}</StyledTableCell>
              <StyledTableCell align="right">{creator.first_name}</StyledTableCell>
              <StyledTableCell align="right">{creator.last_name}</StyledTableCell>
              <StyledTableCell align="right">{creator.email}</StyledTableCell>
              <StyledTableCell align="right">{creator.gender}</StyledTableCell>
              <StyledTableCell align="right">{creator.phone_number}</StyledTableCell>
              <StyledTableCell align="right">{creator.dob}</StyledTableCell>
              <StyledTableCell align="right">
            <EditPopper/>

              </StyledTableCell>
              <StyledTableCell align="right">
                
                  <DeletePopper />
              </StyledTableCell>
        
            </TableRow>
          ))
          : ( <p className="no-approved-creators">No approved creators found!</p>))

          :( <p className="loading-creators">Loading Creators...</p> ) 
            }
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default AdminCreators
