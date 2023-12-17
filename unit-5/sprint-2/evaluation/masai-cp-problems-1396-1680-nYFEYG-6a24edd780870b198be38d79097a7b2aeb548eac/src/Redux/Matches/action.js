import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes";

export const getMatchesReq = () => {
  // Complete the logic
  return {type:GET_MATCH_REQUEST}
};

export const getMatchesSuc=(payload)=>{
  return {type:GET_MATCH_SUCCESS,payload}
}

export const getMatchesFail=()=>{
  return {type:GET_MATCH_FAILURE}
}
