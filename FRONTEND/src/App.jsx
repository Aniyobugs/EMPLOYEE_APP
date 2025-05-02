import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Maain from './components/Maain'
import Admin from './components/Admin'
import EmployeeDetails from './components/EmployeeDetails'
import Employee from './components/Employee'

function App() {
  const [count, setCount] = useState(0)

  return (
    //test
    <>
     {/* <Signup/>
     <Login/> */}
     {/* <Navbar/> */}
     <Routes >
      <Route path ='/' element={<Signup/>}/>
      <Route path ='/L' element={<Login/>}/>
      <Route path ='/admin' element={<Maain child={<Admin/>}/>}/>
      <Route path ='/ed'  element={<Maain child={<EmployeeDetails/>}/>}/>
      <Route path ='/employee'  element={<Maain child={<Employee/>}/>}/>
      </Routes>
    </>
  )
}
//test

export default App
