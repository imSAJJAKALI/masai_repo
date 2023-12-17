import { GET_RESTAURANTS_REQUEST, GET_RESTAURANTS_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    restaurants: [],
    totalPages: 0,
  }

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
      case GET_RESTAURANTS_REQUEST:{
        return {
            ...state,
            isLoading:true,
            
        }
      }
      case GET_RESTAURANTS_SUCCESS:{
        return {
            ...state,
            isLoading:false,
            restaurants:payload.data,
            totalPages:payload.page
            

        }
      }
      case GET_RESTAURANTS_SUCCESS:{
        return {
            ...state,
           isError:true,

        }
      }
        default :{
            return state
        }
    }
};
