import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={'/'}>Home </Link>
        <Link to={'/login'}>LoginPage </Link>
        <Link to={'/signup'}>Signup </Link>
    </div>
  )
}

export default Navbar