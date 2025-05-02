import React from 'react'
import Navbar from './Navbar'

const Maain = (props) => {
  return (
    <div>
        <Navbar/>
        {props.child}
    </div>
  )
}

export default Maain
