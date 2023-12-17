import { GET_MATCH_REQUEST } from "../Matches/actionTypes";
import { ADD_TO_WATCHLIST } from "./actionTypes";

const initialState={
  watchList: [],
}

export const reducer = (state=initialState,{type,payload}) => {
  switch(type){
    case ADD_TO_WATCHLIST:{
      return{
        ...state,
        watchList:[...state.watchList,payload]
      }
    }

    default:{
      return state
    }
  }

};
