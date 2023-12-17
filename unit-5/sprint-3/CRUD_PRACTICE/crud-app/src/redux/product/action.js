import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST } from "./actionType"

let url='http://localhost:8080/products'

export const postProduct=(newProduct)=>async(dispatch)=>{
    try {
        dispatch({type:POST_PRODUCT_REQUEST})

        await axios.post(url,newProduct)
    } catch (error) {
        dispatch({type:POST_PRODUCT_FAILURE})
    }
}

export const getProducts=(obj)=>async(dispatch)=>{

    try {
        dispatch({type:GET_PRODUCT_REQUEST})
    let data=  await axios.get(url,obj)
    dispatch({type:GET_PRODUCT_SUCCESS,payload:data.data})
 
    } catch (error) {
        dispatch({type:GET_PRODUCT_FAILURE})
    }
}