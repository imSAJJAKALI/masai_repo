import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'

import Home from './Home'
import Signup from './Signup'
import BlogPage from './BlogsPage'
import PrivateRoute from './PrivateRoute'


const AllRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/blogs' element={
        <PrivateRoute>

          <BlogPage/>
        </PrivateRoute>
        
        } />
      <Route path='/' element={<Home/>}/>
       </Routes>
    </div>
  )
}

export default AllRoutes