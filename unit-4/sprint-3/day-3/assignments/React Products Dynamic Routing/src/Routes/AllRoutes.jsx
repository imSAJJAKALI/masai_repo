import React from 'react'
// import { Route } from 'react-router'
import { Routes,Route } from 'react-router-dom'
import AllProducts from '../Pages/AllProducts'
import ProductDetails from '../Pages/ProductDetails'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AllProducts/>} />
            <Route path="products/:id" element={<ProductDetails/>} />
        </Routes>
    )
}
