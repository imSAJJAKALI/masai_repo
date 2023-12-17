import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './loginPage'
import Signup from './signupPage'
import Fouram from './fouramPage'
import Home from './Home'
import PrivateRoute from '../components/PrivateRoute'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/fouram' element={
          <PrivateRoute>

            <Fouram/>
          </PrivateRoute>
          
          } />
        </Routes>
    </div>
  )
}

export default AllRoutes