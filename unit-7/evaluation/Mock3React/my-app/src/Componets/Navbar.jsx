import React from 'react'
import {Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex' , justifyContent:'space-evenly'}}>
      <Link to='/'>Home</Link>
      <Link to='/types'>Types</Link>
      <Link to='/favorites'>Faavourite</Link>
    </div>
  )
}

export default Navbar