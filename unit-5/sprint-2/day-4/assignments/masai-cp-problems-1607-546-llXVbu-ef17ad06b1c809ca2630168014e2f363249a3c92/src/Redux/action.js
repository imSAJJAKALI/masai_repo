//action creator functions here

import { ADD_TODOS_ERROR, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionTypes"

export const getTodoRequest=()=>{
    return {type:GET_TODOS_REQUEST}
}

export const getTodoSuccess=(payload)=>{
    return {type:GET_TODOS_SUCCESS,payload}
}

export const getTodoError=()=>{
    return {type:GET_TODOS_ERROR}
}

export const addTodoRequest=()=>{
    return {type:ADD_TODOS_REQUEST}
}

export const addTodoSuccess=(payload)=>{
    return {type:ADD_TODOS_SUCCESS,payload}
}

export const addTodoError=()=>{
    return{type:ADD_TODOS_ERROR}
}

