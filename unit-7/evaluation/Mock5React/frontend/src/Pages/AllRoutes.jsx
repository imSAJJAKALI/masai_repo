import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'

import Onboard from './Onboard'
import DoctorDashboard from './Dashboard'


const AllRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/login_signup' element={<Login/>} />
        <Route path='/onboard' element={<Onboard/>} />
        <Route path='/dashboard' element={<DoctorDashboard/>} />
       </Routes>
    </div>
  )
}

export default AllRoutes