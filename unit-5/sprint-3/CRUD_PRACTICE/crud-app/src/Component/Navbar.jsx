import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Navbar = () => {
  return (
    <DIV>
      <Link className={'link'}><h3>Logo</h3></Link>
        <Link className={'link'} to="/">Home</Link>
        <Link className={'link'} to="/login">Login</Link>
        <Link className={'link'} to="/admin">Admin</Link>
    </DIV>
  )
}

export default Navbar

const DIV=styled.div`
background-color:black;
color:white;
display:flex;
align-items:center;
gap:20px;
justify-content:space-evenly;
.link{
  text-decoration:none;
  text-styles:none; 
  color:white;
  font-size:20px
}
`
