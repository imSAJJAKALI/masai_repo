import { useSelector } from "react-redux";
import {Navigate,useLocation} from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const {isAuth}=useSelector((store)=>store.authReducer)
    const loacation =useLocation()
    if(!isAuth){
        return <Navigate state={loacation.pathname} to='/login'/>
    }
    return <div>
        {children}
    </div>
};
