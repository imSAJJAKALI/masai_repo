import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"


export const getData=()=>(dispatch)=>{
      dispatch({type:LOGIN_SUCCESS})
}
