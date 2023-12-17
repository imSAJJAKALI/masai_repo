import { ADD_TO_WATCHLIST } from "./actionTypes"


export const addWatchList=(data)=>(dispatch)=>{

    dispatch({type:ADD_TO_WATCHLIST,payload:data})
}