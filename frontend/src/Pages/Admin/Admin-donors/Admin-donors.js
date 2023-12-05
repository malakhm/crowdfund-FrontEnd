import React from 'react'
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
import './Admin-donors.css'
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

const data = [ {
  id: 1,
  Username: "malak12", 
  FirstName: "husein",
  LastName: "khasen",
  Phone: "76-076487",
  Email: "malakelhamwi@gmail.com",
  DOB: "12 december 2023",
  Gender: "male"
  
},{ id: 1,
Username: "malak12", 
FirstName: "Malak",
LastName: "Hamwi",
Phone: "76-076487",
Email: "malakelhamwi@gmail.com",
DOB: "12 december 2023",
Gender: "male"

},
{
  id: 1,
  Username: "lidsx", 
  FirstName: "pa",
  LastName: "Hamwi",
  Phone: "76-076487",
  Email: "jawad@gmail.com",
  DOB: "12 december 2023",
  Gender: "male"
  
  },{
  
  id: 1,
  Username: "kamal", 
  FirstName: "Malvrvak",
  LastName: "Hamwi",
  Phone: "76-076487",
  Email: "csd@gmail.com",
  DOB: "12 january 2023",
  Gender: "male"
  
  }
  ,{
  
    id: 1,
    Username: "kamal", 
    FirstName: "Malvrvak",
    LastName: "Hamwi",
    Phone: "76-076487",
    Email: "csd@gmail.com",
    DOB: "12 january 2023",
    Gender: "male"
    
    }
    ,{
  
      id: 1,
      Username: "kamal", 
      FirstName: "Malvrvak",
      LastName: "Hamwi",
      Phone: "76-076487",
      Email: "csd@gmail.com",
      DOB: "12 january 2023",
      Gender: "male"
      
      },{
  
        id: 1,
        Username: "kamal", 
        FirstName: "Malvrvak",
        LastName: "Hamwi",
        Phone: "76-076487",
        Email: "csd@gmail.com",
        DOB: "12 january 2023",
        Gender: "male"
        
        },{
  
          id: 1,
          Username: "kamal", 
          FirstName: "Malvrvak",
          LastName: "Hamwi",
          Phone: "76-076487",
          Email: "csd@gmail.com",
          DOB: "12 january 2023",
          Gender: "male"
          
          },{
  
            id: 1,
            Username: "kamal", 
            FirstName: "Malvrvak",
            LastName: "Hamwi",
            Phone: "76-076487",
            Email: "csd@gmail.com",
            DOB: "12 january 2023",
            Gender: "male"
            
            },{
  
              id: 1,
              Username: "kamal", 
              FirstName: "Malvrvak",
              LastName: "Hamwi",
              Phone: "76-076487",
              Email: "csd@gmail.com",
              DOB: "12 january 2023",
              Gender: "male"
              
              },{
  
                id: 1,
                Username: "kamal", 
                FirstName: "Malvrvak",
                LastName: "Hamwi",
                Phone: "76-076487",
                Email: "csd@gmail.com",
                DOB: "12 january 2023",
                Gender: "male"
                
                },{
  
                  id: 1,
                  Username: "kamal", 
                  FirstName: "Malvrvak",
                  LastName: "Hamwi",
                  Phone: "76-076487",
                  Email: "csd@gmail.com",
                  DOB: "12 january 2023",
                  Gender: "male"
                  
                  },{
  
                    id: 1,
                    Username: "kamal", 
                    FirstName: "Malvrvak",
                    LastName: "Hamwi",
                    Phone: "76-076487",
                    Email: "csd@gmail.com",
                    DOB: "12 january 2023",
                    Gender: "male"
                    
                    },{
  
                      id: 1,
                      Username: "kamal", 
                      FirstName: "Malvrvak",
                      LastName: "Hamwi",
                      Phone: "76-076487",
                      Email: "csd@gmail.com",
                      DOB: "12 january 2023",
                      Gender: "male"
                      
                      }
    
    

]

    

function createData(id, Username, FirstName, LastName, Phone, Email, DOB, Gender, Action) {
  return { id, Username, FirstName, LastName, Phone, Email, DOB, Gender, Action };
}

const rows = []
  for(let i = 0; i< data.length;  i++) {rows.push(createData(data[i].id, data[i].Username, data[i].FirstName, data[i].LastName, data[i].Phone, data[i].Email,data[i].Gender, data[i].DOB))}
  console.log(rows)

const AdminDonors = () => {
  return (
    <div className='Admin-Creators-table-main container d-flex flex-column '>
       <h1 className="donors-page-heading">
        <img
          className="users-icon-in-donors-page"
          src={users_icon}
          alt="users icon"
        />
        <p className="donors-page-heading-spacer"></p>
        <p className="donors-page-word">Donors</p>
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
              Edit
            </StyledTableCell>
            <StyledTableCell align="right"> 
              Delete
            </StyledTableCell>


          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
        
              <StyledTableCell align="right">{row.Username}</StyledTableCell>
              <StyledTableCell align="right">{row.FirstName}</StyledTableCell>
              <StyledTableCell align="right">{row.LastName}</StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.DOB}</StyledTableCell>
              <StyledTableCell align="right">{row.Phone}</StyledTableCell>
              <StyledTableCell align="right">{row.Gender}</StyledTableCell>
              <StyledTableCell align="right">
            <EditPopper/>

              </StyledTableCell>
              <StyledTableCell align="right">
                
                  <DeletePopper />
              </StyledTableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default AdminDonors
