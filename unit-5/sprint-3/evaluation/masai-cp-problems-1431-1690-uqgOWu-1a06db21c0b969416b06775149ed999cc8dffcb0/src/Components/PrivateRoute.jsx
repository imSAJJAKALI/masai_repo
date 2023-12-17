import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const auth=useSelector((store)=>store.authReducer.isAuth)
  if(!auth){
    return <Navigate to='/login' />
  }

  return <div>{children}</div>;
};
