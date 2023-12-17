import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

let url='https://reqres.in/api/login'

export const login =(userData)=>async(dispatch)=>{

try {
    dispatch({type:LOGIN_REQUEST})
    await axios.post(url,userData)
    .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data.token}))
    
} catch (error) {
    dispatch({type:LOGIN_FAILURE})
}

}