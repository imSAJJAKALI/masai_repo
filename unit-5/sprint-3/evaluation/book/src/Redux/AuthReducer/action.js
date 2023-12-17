import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

let url='https://reqres.in/api/login'
export const login = (user) =>async(dispatch)=> {
 try {
  dispatch({type:LOGIN_REQUEST})

  await axios.post(url,user)
  .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data.token}))
  
 } catch (error) {
  dispatch({type:LOGIN_FAILURE})
 }
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
