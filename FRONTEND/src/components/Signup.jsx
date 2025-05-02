import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  var [input, setInput] = useState({});
  var baseurl = import.meta.env.VITE_API_BASE_URL;
  var navigate=useNavigate();
  const inpuHandler = (e) => {
    // console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const addhandler = () => {
    console.log("Clicked");
    axios
      .post(`${baseurl}/api`, input)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate('/L')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f5f7fa' }}>
  <Box
    sx={{
      width: 400,
      padding: 4,
      backgroundColor: "#ffffff",
      borderRadius: 4,
      marginTop: 5,
      boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Typography variant="h3" gutterBottom align="center" sx={{ fontFamily:"italian",fontWeight: 400, color: "purple" }}>
      INFOSUS
    </Typography>
    <Typography variant="h5" gutterBottom align="center" sx={{ color: "#555",fontFamily:"italian" }}>
      Signup Form
    </Typography>

    <TextField
      fullWidth
      label="Fullname"
      variant="outlined"
      margin="normal"
      name="fname"
      onChange={inpuHandler}
    />

    <TextField
      fullWidth
      label="Email"
      variant="outlined"
      margin="normal"
      name="ename"
      onChange={inpuHandler}
    />

    <TextField
      fullWidth
      label="Password"
      variant="outlined"
      margin="normal"
      name="password"
      onChange={inpuHandler}
      type="password"
    />

    <Button
  
      onClick={addhandler}
      fullWidth
      variant="contained"
      sx={{
        marginTop: 2,
        backgroundColor: "purple",
        "&:hover": {
          backgroundColor: "purple",
        },
        fontWeight: 400,
        fontFamily:"italian"
      }}
    >
      Sign Up
    </Button>

    <Typography variant="h6" align="center" sx={{ color: "text.secondary", marginTop: 3 }}>
      Already a user? <Link to="/L" style={{ fontFamily:"italian",color: "purple", textDecoration: 'none', fontWeight: 500 }}>Login</Link>
    </Typography>
  </Box>
</div>
  );
};

export default Signup;
