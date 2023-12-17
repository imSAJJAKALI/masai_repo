import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"

export const todoActionRequest=()=>{
    return {type:GET_TODO_REQUEST}
}

export const todoActionSuccess=(payload)=>{
   
    return {type:GET_TODO_SUCCESS,payload}
}

export const todoActionFailure=()=>{
    return {type:GET_TODO_FAILURE}
}

