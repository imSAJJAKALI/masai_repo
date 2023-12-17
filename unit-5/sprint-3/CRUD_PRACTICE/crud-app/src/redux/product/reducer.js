import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actionType"

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    postSuccess:false,
}

export const reducer=(state=initialState,{type,payload})=>{
    
    switch(type){
        case POST_PRODUCT_REQUEST:{
            return {
                ...state,
                isLoading:true
            }
        }
        case POST_PRODUCT_SUCCESS:{
            return {
                ...state,
                postSuccess:true
            }
        }
        case POST_PRODUCT_FAILURE:{
            return {
                ...state,
                isError:true
            }
        }
        case GET_PRODUCT_REQUEST:{
            return {
                ...state,
                isLoading:true
            }
        }
        case GET_PRODUCT_SUCCESS:{
            return {
                ...state,
                products:payload
            }
        }
        case GET_PRODUCT_FAILURE:{
            return {
                ...state,
                isError:true
            }
        }
        default:{
            return state
        }
    }
}

