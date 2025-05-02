import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EmployeeDetails = () => {
  var [Employee, setEmployee] = useState([]);
  var baseurl = import.meta.env.VITE_API_BASE_URL;
  var location = useLocation();
  var navigate = useNavigate();
  console.log("loc", location.state);
  useEffect(() => {
    axios
      .get(`${baseurl}/e`)
      .then((res) => {
        setEmployee(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updatePro = (pro) => {
    console.log(pro);
    navigate("/admin", { state: { pro } });
  };
  const deletePro = (id) => {
    axios.delete(`${baseurl}/e/${id}`).then((res) => {
      alert(res.data.message);
      window.location.reload();
    });
  };
  return (
      <div>
      
    <TableContainer
      component={Paper}
      sx={{
        mt: 6,
        borderRadius: 3,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'purple' }}>
            {['Full Name', 'Designation', 'Location', 'Salary', 'Actions'].map((head, index) => (
              <TableCell
                key={index}
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  borderBottom: 'none',
                }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {Employee.map((val, i) => (
            <TableRow
              key={i}
              sx={{
                backgroundColor: i % 2 === 0 ? '#f9f9f9' : '#ffffff',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#e8eaf6',
                },
              }}
            >
              <TableCell>{val.fname}</TableCell>
              <TableCell>{val.dname}</TableCell>
              <TableCell>{val.lname}</TableCell>
              <TableCell>{val.sname}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: '#4caf50',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    mr: 1,
                    '&:hover': {
                      backgroundColor: '#43a047',
                    },
                  }}
                  onClick={() => updatePro(val)}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    '&:hover': {
                      backgroundColor: '#e53935',
                    },
                  }}
                  onClick={() => deletePro(val._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default EmployeeDetails
