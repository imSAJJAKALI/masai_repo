import axios from "axios"
import { RECIPE_REQUEST_FAILURE, RECIPE_REQUEST_PENDING, RECIPE_REQUEST_SUCCESS } from "./actionTypes"

let url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/recipe`;

export const getRecipe=(obj)=>async(dispatch)=>{

    try {
        dispatch({type:RECIPE_REQUEST_PENDING})

        await axios.get(url,obj)
        .then((res)=>dispatch({type:RECIPE_REQUEST_SUCCESS,payload:res.data}))
        
    } catch (error) {
        dispatch({type:RECIPE_REQUEST_FAILURE})
    }

}