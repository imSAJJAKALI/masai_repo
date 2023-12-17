import axios from "axios";
import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes";

const baseUrl = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches`

export const getMatches = (page, sort) => async (dispatch) => {
  try {
    dispatch({ type: GET_MATCH_REQUEST });

    let url = `${baseUrl}?_page=${page}&_limit=10`;

    if (sort === "asc") {
      url += "&_sort=year&_order=asc";
    } else if (sort === "desc") {
      url += "&_sort=year&_order=desc";
    }

    const response = await axios.get(url);
    dispatch({ type: GET_MATCH_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_MATCH_FAILURE });
  }
};
