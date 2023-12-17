import axios from "axios";
import { PATCH_REQUEST, PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes";

const url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`

export const getBooks = (paramObj) =>async(dispatch)=> {
try {
  dispatch({type:PRODUCT_REQUEST})
  await axios.get(url,paramObj)
  .then((res)=>dispatch({type:PRODUCT_SUCCESS,payload:res.data}))

} catch (error) {
  dispatch({type:PRODUCT_FAILURE})
}
};

export const editBook = (bookDet,pageNum) =>(dispatch)=> {
  // Write logic here
 
    axios.patch(`http://localhost:8080/books/${pageNum.id}`,bookDet)
    

  
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
