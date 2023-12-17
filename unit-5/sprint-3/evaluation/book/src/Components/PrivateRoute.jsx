import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  
  const {isAuth}=useSelector((store)=>store.authReducer)
  const location =useLocation()
  console.log(location)
  if(!isAuth){
        return <Navigate state={location.pathname} to='/login'/>
  }
  return <div>{children}</div>;
};
