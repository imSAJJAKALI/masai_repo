import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
const {isAuth}=useSelector((store)=>store.reducer)

if(!isAuth){
    return <Navigate to="/login"/>
}

  return (
    <div>{children}</div>
  )
}

export default PrivateRoute