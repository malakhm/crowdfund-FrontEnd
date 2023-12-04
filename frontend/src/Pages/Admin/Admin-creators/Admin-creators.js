
import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = {
  id: 1,
  Username: "malak12", 
  FirstName: "Malak",
  LastName: "Hamwi",
  Phone: "76-076487",
  Email: "malakelhamwi@gmail.com",
  DOB: "12 december 2023",
  Gender: "male"
  
}

    

function createData(id, Username, FirstName, LastName, Phone, Email, DOB, Gender, Action) {
  return { id, Username, FirstName, LastName, Phone, Email, DOB, Gender, Action };
}

// const rows = []
//   for(let i = 0; i< 5;  i++) {rows.push(createData(data.id, data.Username, data.FirstName, data.LastName, data.Email, data.DOB))}
  

const AdminCreators = () => {
  return (
    <div className='Admin-Creators-table-main'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id </TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Action</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">

              </TableCell>
              <TableCell align="right">{data.Username}</TableCell>
              <TableCell align="right">{data.FirstName}</TableCell>
    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default AdminCreators

