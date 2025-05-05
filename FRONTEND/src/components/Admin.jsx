// import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Admin = () => {
  var baseurl=import.meta.env.VITE_API_BASE_URL;
  var navigate=useNavigate();
  var location = useLocation()
  console.log("loc",location.state)
  const [input, setProductdata] = useState({
    fname: '',
    dname: '',
    lname: '',
    sname: '',
  });
  useEffect(()=>{
  // var {pro} = location.state
  const { pro } = location.state || {};
if(location.state !== null){
  setProductdata({
    fname:pro.fname || "",
    dname:pro.dname  || "",
    lname:pro.lname || "",
    sname:pro.sname || "",
  })
}    
    },[])


  const inputHandler = (e) => {
    setProductdata({...input,[e.target.name]:e.target.value})
    console.log(input)
  };

  // const handleToggle = () => {
  //   setInput((prev) => ({ ...prev, available: !prev.available }));
  // };
  // test


const submithandler = () => {
//   const formData = new FormData();
//   formData.append('fname', input.fname);
//   formData.append('dname', input.dname);
//   formData.append('lname', input.lname);
//   formData.append('sname', input.sname);

//  if (location.state!==null){
//   var id =location.state.pro._id
//   axios.put(`${baseurl}/e/${id}`,formData)
//   .then((res)=>{
//     alert(res.data.message)
//     navigate("/ed")
//   })
//  }else{
//   axios
//     .post(`${baseurl}/e`, formData)
//     .then((res) => {
//       console.log(res.data);
//       alert(res.data.message)
//       navigate('/employee')
//     })  
//     .catch((err) => {
//       console.log(err);  
//     });
const payload = {
  fname: input.fname,
  dname: input.dname,
  lname: input.lname,
  sname: input.sname
};

if (location.state !== null) {
  const id = location.state.pro._id;
  axios.put(`${baseurl}/e/${id}`, payload)
    .then((res) => {
      alert(res.data.message);
      navigate("/ed");
    });
} else {
  axios.post(`${baseurl}/e`, payload)
    .then((res) => {
      alert(res.data.message);
      navigate('/employee');
    })
    .catch((err) => {
      console.log(err);
    });

 }
 
  // axios
  //   .post(`${baseurl}/p`, formData)
  //   .then((res) => {
  //     console.log(res.data);
  //     alert(res.data.message)
  //     navigate('/product')
  //   })  
  //   .catch((err) => {
  //     console.log(err);  
  //   });
};
  return (
  
 
  
<Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        padding: 4,
        backgroundColor: '#ffffff',
        borderRadius: 4,
        marginTop: 10,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Roboto, sans-serif',
        position: 'relative',
      }}
    >
      {/* Top-right button */}
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <Button
          variant='outlined'
          sx={{
            textTransform: 'none',
            borderColor: '#673ab7',
            color: '#673ab7',
            fontWeight: 'bold',
            px: 2,
            py: 0.5,
            fontSize: '0.875rem',
            '&:hover': {
              backgroundColor: '#f3e5f5',
              borderColor: '#512da8',
            },
          }}
        >
          <Link
            to="/ed"
            style={{ textDecoration: 'none', color: '#673ab7' }}
          >
            Employee Details
          </Link>
        </Button>
      </Box>
      <br />

      <Typography
        variant='h4'
        gutterBottom
        align='center'
        sx={{ fontWeight: 'bold', color: 'purple', mb: 4,fontFamily:"italian" }}
      >
        Add Employee
      </Typography>

      <form>
        <TextField
          fullWidth
          label='Full Name'
          variant='outlined'
          margin='normal'
          name='fname'
          value={input.fname}
          onChange={inputHandler}
          required
        />

        <TextField
          fullWidth
          label='Designation'
          variant='outlined'
          margin='normal'
          name='dname'
          value={input.dname}
          onChange={inputHandler}
          required
        />

        <TextField
          fullWidth
          label='Location'
          variant='outlined'
          margin='normal'
          name='lname'
          value={input.lname}
          onChange={inputHandler}
          multiline
          rows={3}
        />

        <TextField
          fullWidth
          label='Salary'
          type='number'
          variant='outlined'
          margin='normal'
          name='sname'
          value={input.sname}
          onChange={inputHandler}
          required
        />

        <FormControlLabel
          control={<Switch color='warning' />}
          label='Available'
          sx={{ mt: 2, color: '#424242' }}
        />

        <Button
          fullWidth
          variant='contained'
          color='secondary'
          sx={{
            mt: 4,
            py: 1.5,
            fontWeight: 'bold',
            fontSize: '1rem',
            letterSpacing: 0.5,
          }}
          onClick={submithandler}
        >
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default Admin
