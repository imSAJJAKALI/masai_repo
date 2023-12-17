import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios";

let url=`https://reqres.in/api/login`;

export const login=(userDetails)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST})

        await axios.post(url,userDetails)
        .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data.token}))
        
    } catch (error) {
        dispatch({type:LOGIN_FAILURE})
    }
}
