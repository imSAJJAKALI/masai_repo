import axios from "axios";
import { GET_RESTAURANTS_FAILURE, GET_RESTAURANTS_REQUEST, GET_RESTAURANTS_SUCCESS } from "./actionTypes";

let url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
export const getRestaurants = (page) => async(dispatch)=> {
  // Write logic here
const queryParams={
  params:{
    limit:9,
    page:1

  }
}

  try {
    dispatch({type:GET_RESTAURANTS_REQUEST})
   
  let data= await axios.get(url,queryParams)
    dispatch({type:GET_RESTAURANTS_SUCCESS,payload:data.data})

  } catch (error) {
    dispatch({type:GET_RESTAURANTS_FAILURE})
  }
};

if (window.Cypress) {
  window.getRestaurants = getRestaurants;
}
