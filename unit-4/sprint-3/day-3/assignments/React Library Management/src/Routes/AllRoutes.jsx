import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookDetailsPage from '../Pages/BookDetailsPage'
import Home from '../Pages/Home'
import InvalidPage from '../Pages/InvalidPage'
import Navbar from '../Pages/Navbar'
import SectionPage from '../Pages/SectionPage'

export default function AllRoutes() {
    return (
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/section/:section" element={<SectionPage/>} />
        <Route path="/bookdetailspage/:id" element={<BookDetailsPage/>} />
        <Route path="*" element={<InvalidPage/>} />
      </Routes>
    )
}
