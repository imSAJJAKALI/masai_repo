import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes