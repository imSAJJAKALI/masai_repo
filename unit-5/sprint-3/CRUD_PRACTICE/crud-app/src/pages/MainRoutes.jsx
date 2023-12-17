import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Admin from './Admin'
import Navbar from '../Component/Navbar'
import EditPage from './EditPage'
import PrivateRoutes from '../Component/PrivateRoutes'

const MainRoutes = () => {
  return (
    <div>
        <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/edit/:id' element={
            <PrivateRoutes>
            <EditPage/>
            </PrivateRoutes>
            }/>
        </Routes>
    </div>
  )
}

export default MainRoutes