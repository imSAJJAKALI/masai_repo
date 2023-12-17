import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const baseUrl='https://reqres.in/api/login'

export const login = (payload) =>async(dispatch)=> {
  try {
    dispatch({type:LOGIN_REQUEST})

    await axios.post(baseUrl,payload)
    .then((token)=>dispatch({type:LOGIN_SUCCESS,payload:token.data.token}))
   
   

  } catch (error) {
   dispatch({type:LOGIN_FAILURE}) 
  }
};
