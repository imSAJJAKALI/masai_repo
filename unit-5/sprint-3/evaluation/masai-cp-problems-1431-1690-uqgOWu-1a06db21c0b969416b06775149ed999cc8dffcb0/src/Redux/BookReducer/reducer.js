import { GET_BOOK_FAILURE, GET_BOOK_REQUEST, GET_BOOK_SUCCESS } from "./actionTypes"


const initialState={
    isLoading: false,
  isError: false,
  books: [],
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_BOOK_REQUEST:{
            return {...state,isLoading:true}
        }
        case GET_BOOK_SUCCESS:{
            return {...state,isLoading:false,books:payload}
        }
        case GET_BOOK_FAILURE:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }

}