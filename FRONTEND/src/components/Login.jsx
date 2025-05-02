import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
const Login = () => {
    var[input,setInput] =useState({})
    var baseurl = import.meta.env.VITE_API_BASE_URL;
    var navigate=useNavigate();
        const inpuHandler =(e)=>{
            // console.log(e.target.value)
            setInput({...input,[e.target.name]:e.target.value})
            console.log(input)
            
        }
        const addhandler=()=>
          axios
      .post(`${baseurl}/api/login`, input)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message)
        sessionStorage.setItem("role",res.data.user.role)
        if(res.status===200){
          alert(res.data.message)
          if(res.data.user.role=='admin'){
            navigate('/admin')
          }else{
            navigate('/employee')
        }
      }
    
      })  
      .catch((error) => {
        console.log(error);
      });
          

            console.log("Clicked")
    
  return (
    // <div>
    //     <Box
    //     sx={{
    //         padding:2,
    //         backgroundColor:"White",
    //         boarderRadius:2,
    //         marginTop:5,
    //         boxShadow:3
    //     }}>
    //         <Typography variant='h3' color="standard" gutterBottom>WELCOME TO INFOSUS</Typography> 
    //     <Typography variant='h5' gutterBottom>Login to continue </Typography>  
    //     <TextField
    //     fullWidth
    //     label='Email'
    //     variant='outlined'
    //     margin='normal'
    //     name='ename'
        
    //     onChange={inpuHandler}
    //     >
    //         </TextField>
    
    //     <TextField
    //     fullWidth
    //     label='Password'
    //     variant='outlined'
    //     margin='normal'
    //     name='password'
       
    //     onChange={inpuHandler}>
    //     </TextField>
    //     <Button  
    //     onClick={addhandler}
    //     fullWidth 
    //     variant="contained"
    //     color='primary'>
    //     LOG IN
    //     </Button><br /><br />
    //   <Typography variant='h6' sx={{color:"text.secondary"}}>
    //     DONT HAVE AN ACCOUNT?
    //     <Link to={'/'}>Create an account</Link>
    //   </Typography>
    
    //   </Box>
     
      
    // </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f3f0ff' }}>
  <Box
    sx={{
      width: 400,
      padding: 4,
      backgroundColor: "#ffffff",
      borderRadius: 4,
      boxShadow: "0 10px 30px rgba(128, 0, 128, 0.2)",
      textAlign: 'center',
    }}
  >
    <Typography variant="h3" gutterBottom sx={{ fontFamily: "italian", fontWeight: 400, color: 'purple' }}>
    Welocme back to infosus
    </Typography>
    
    <Typography variant="h6" gutterBottom sx={{ color: "purple", marginBottom: 3 }}>
      Login to continue
    </Typography>

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
      type="password"
      onChange={inpuHandler}
    />

    <Button
      onClick={addhandler}
      fullWidth
      variant="contained"
      sx={{
        backgroundColor: "#7b1fa2",
        marginTop: 2,
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: "#6a1b9a",
        },
      }}
    >
      LOG IN
    </Button>

    <Typography variant="body1" sx={{ color: "text.secondary", marginTop: 3 }}>
      Don’t have an account?{' '}
      <Link to="/" style={{ color: "#7b1fa2", fontWeight: 500, textDecoration: 'none' }}>
        Create one
      </Link>
    </Typography>
    
    <Typography 
        variant="caption" 
        sx={{ color: '#a0aec0' }}
      >
        Or continue with
      </Typography>
   

    <div style={{ 
      display: 'flex', 
      gap: '16px', 
      justifyContent: 'center' 
    }}>
      <Button
        variant="outlined"
        sx={{
          borderRadius: '8px',
          padding: '8px 16px',
          borderColor: '#e2e8f0',
          '&:hover': {
            borderColor: '#cbd5e0'
          }
        }}
      >
        <GoogleIcon sx={{ color: '#e53e3e' }} />
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderRadius: '8px',
          padding: '8px 16px',
          borderColor: '#e2e8f0',
          '&:hover': {
            borderColor: '#cbd5e0'
          }
        }}
      >
        <GitHubIcon sx={{ color: '#2d3748' }} />
      </Button>
    </div>
  </Box>
</div>
  )
}

export default Login

