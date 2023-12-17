import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isauth}=useSelector((store)=>store.reducer)
    console.log(!isauth)


  return (
    <div>{children}</div>
  )
}

export default PrivateRoute