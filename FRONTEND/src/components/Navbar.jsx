import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [role,setRole] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
    const savedRole = sessionStorage.getItem('role');
    setRole(savedRole);
  },[])

  const handleLogout = ()=>{
    sessionStorage.clear();
    navigate('/')
  }

  return (
    <div>
      
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <AppBar color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:"italian" }}>
         <b>INFOSUS</b>
          </Typography>
          <Button><Link to={'/'} style={{textDecoration:'none',color:'white'}}>SIGN UP</Link></Button>
          <Button><Link to={'/L'} style={{textDecoration:'none',color:'white'}}>LOGIN</Link></Button>
          {role==="admin" && (
          <Button >
          <Link to={'/admin'} style={{textDecoration:'none', color:'white'}}>
          Admin
          </Link> 
       </Button>
         )}
         <Button >
            <Link to={'/employee'} style={{textDecoration:'none', color:'white'}}>
            Employees
            </Link> 
         </Button>
        {role && (
          <Button onClick={handleLogout} color='inherit' >
          Logout
       </Button>
        )}  

        </Toolbar>
      </AppBar>
      </AppBar>
    </Box>
    
    </div>
  )
}

export default Navbar
