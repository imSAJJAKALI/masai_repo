import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

let url="https://reqres.in/api/login"
export const login = (payload) => async(dispatch)=> {
    try {
      dispatch({type:LOGIN_REQUEST})

      await axios.post(url,payload)
      .then((token)=>dispatch({type:LOGIN_SUCCESS,payload:token.data.token}))

    } catch (error) {
     dispatch({type:LOGIN_FAILURE}) 
    }
};

if (window.Cypress) {
  window.login = login;
}
