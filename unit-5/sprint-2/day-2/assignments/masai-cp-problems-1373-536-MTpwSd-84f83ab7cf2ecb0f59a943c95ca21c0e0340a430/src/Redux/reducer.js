import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType";

export const reducer=(state,{type,payload})=>{
   switch(type){
    case GET_TODO_REQUEST:{
        return {
           ...state,
           isLoading:true,
         
        }
    }
    case GET_TODO_SUCCESS:{
        return {
           ...state,
           todos:payload,
           isLoading:false,
           isError:false,
        }
    }
    case GET_TODO_FAILURE:{
        return {
           ...state,
           isError:true,
        }
    }
    default:{

      return state
    }
   }    
}