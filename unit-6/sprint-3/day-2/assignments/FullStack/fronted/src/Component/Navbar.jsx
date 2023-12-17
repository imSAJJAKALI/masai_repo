import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly',margin:'auto',padding:'20px',backgroundColor:'teal',color:'white'}}>
        <NavLink style={{textDecoration:'none',color:'white'}} to={'/'} >Home</NavLink>
        <NavLink style={{textDecoration:'none',color:'white'}}  to={'/about'} >About</NavLink>
        <NavLink style={{textDecoration:'none',color:'white'}} to={'/login'} >Login</NavLink>
        <NavLink style={{textDecoration:'none',color:'white'}} to={'/sign-up'} >Sign-Up</NavLink>
    </div>
  )
}

export default Navbar