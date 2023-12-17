import { PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"

const initialState={
        isLoading: false,
        isError: false,
        books: [],
      }


export const reducer=(state=initialState,{type,payload})=>{
switch(type){
    case PRODUCT_REQUEST:{
        return {
            ...state,
            isLoading:true
        }
    }
    case PRODUCT_SUCCESS:{
        return {
            ...state,
            isLoading:false,
            books:payload
        }
    }
    case PRODUCT_REQUEST:{
        return {
            ...state,
            isError:false
        }
    }
    default :{
        return state
    }
}

}
