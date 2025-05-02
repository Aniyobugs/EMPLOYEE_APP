import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Employee = () => {
  const[data,setEmployee]=useState([]);
  var baseurl=import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios
      .get(`${baseurl}/e`) 
      .then((res) => {
        console.log(res)
        setEmployee(res.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  },[]);
    return(
       <div>
   
       <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        // background: 'linear-gradient(135deg, #f5f7fa, #e4ecf7)',
        padding: 4,
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 4,
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          width: 800,
          
          maxWidth: 1000,
          border: '1px solid #e0e0e0',
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'lightpurple' }}>
              {['Fullname', 'Designation', 'Location', 'Salary'].map((header, idx) => (
                <TableCell
                  key={idx}
                  sx={{
                    color: 'purple',
                    fontWeight: 'bold',
                    fontSize: '1.05rem',
                    letterSpacing: 0.5,
                    borderBottom: '2px solid #cfd8dc',
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((val, i) => (
              <TableRow
                key={i}
                sx={{
                  backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9f9f9',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                }}
              >
                <TableCell sx={{ color: 'purple' }}>{val.fname}</TableCell>
                <TableCell sx={{ color: 'green' }}>{val.dname}</TableCell>
                <TableCell sx={{ color: 'red' }}>{val.lname}</TableCell>
                <TableCell sx={{ color: 'blue' }}>{val.sname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </div>
  )
}

export default Employee
