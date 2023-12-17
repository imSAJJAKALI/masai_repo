import { EDIT_BOOK_FAILURE, EDIT_BOOK_REQUEST, EDIT_BOOK_SUCCESS, GET_BOOK_FAILURE, GET_BOOK_REQUEST, GET_BOOK_SUCCESS } from "./actionTypes";
import axios from 'axios'

export const getBooks = (paramObj) =>(dispatch)=> {
  dispatch({type:GET_BOOK_REQUEST})
  return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,paramObj)
  .then((res)=>{
    dispatch({type:GET_BOOK_SUCCESS,payload:res.data})
  })
  .catch((err)=>{
    dispatch({type:GET_BOOK_FAILURE,})
  })
  // Write logic here
};

export const editBook = (id,data) =>(dispatch)=> {
    dispatch({type:EDIT_BOOK_REQUEST})
    return axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`,data)
    .then((res)=>{
      dispatch({type:EDIT_BOOK_SUCCESS})
    })
    .catch((err)=>{
      dispatch({type:EDIT_BOOK_FAILURE})
    })
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
