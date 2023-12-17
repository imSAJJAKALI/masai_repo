import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {isAuth} = useSelector((store)=>store.authReducer)

    if(!isAuth){
        return <Navigate to='/login'/>
    }
  return (
    <>{children}</>
  )
} 

export default PrivateRoutes