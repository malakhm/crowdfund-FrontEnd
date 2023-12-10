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
import ReplyPopper from '../../../Popups/reply.js';
import message_icon from '../Admin-assets/inbox.png';
import SideBar from '../../../Components/Side-bar/Side-bar.js'
import AdminMenu from '../../../Components/Admin-menu/admin-menu'
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
      Username: "kamal", 
      Message: "hello admin",
      Date: "12 january 2023",
      Role: "Donor",

      },

      {
  
        id: 2,
        Username: "fadi", 
        Message: "hello admin",
        Date: "12 january 2023",
        Role: "Donor",
  
        },

        {
  
          id: 3,
          Username: "chadi", 
          Message: "hello admin",
          Date: "12 january 2023",
          Role: "Donor",
    
          },
    
    

]

    

function createData(id, Username, Message, Date, Role, Action) {
  return { id, Username, Message, Date,  Role,Action };
}

const rows = []
  for(let i = 0; i< data.length;  i++) {rows.push(createData(data[i].id, data[i].Username, data[i].Message, data[i].Date, data[i].Role))}
  console.log(rows)

function AdminMessages() {
  return (
    <>
    <SideBar><AdminMenu/></SideBar>

    <div className='Admin-Creators-table-main container d-flex flex-column '>
       <h1 className="donors-page-heading">
        <img
          className="users-icon-in-donors-page"
          src={message_icon}
          alt="users icon"
        />
        <p className="donors-page-heading-spacer"></p>
        <p className="donors-page-word">Messages</p>
      </h1>
    <TableContainer component={Paper} className='Table-container-component-wrapper'>
      <Table sx={{ minWidth: 750 }} size="small" aria-label="customized table">
        <TableHead>
          <StyledTableRow  style={{backgroundColor:'#f3c21b', color: '#333333'}}>
            <StyledTableCell>id </StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Message</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="right">    
            </StyledTableCell>
            <StyledTableCell align="right"> 

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
              <StyledTableCell align="right">{row.Message}</StyledTableCell>
              <StyledTableCell align="right">{row.Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Role}</StyledTableCell>
             
              <StyledTableCell align="right">
            <ReplyPopper/>

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
    </>
  )
}

export default AdminMessages
