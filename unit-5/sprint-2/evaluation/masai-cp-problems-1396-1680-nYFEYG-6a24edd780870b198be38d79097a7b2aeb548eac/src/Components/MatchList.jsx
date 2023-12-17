import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatchesFail, getMatchesReq, getMatchesSuc } from "../Redux/Matches/action";
import axios from "axios";
import { MatchCard } from "./MatchCard";

export const MatchList = () => {

  const matchData=useSelector((store)=>store.matchReducer.matches)
  // console.log(matchData)
  const pageNo=useSelector((store)=>store.Pagereducer.page)

  const dispatch=useDispatch()
useEffect(()=>{
   dispatch(getMatchesReq())
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches?_page=${pageNo}&_limit=10`)
  .then((res)=>dispatch(getMatchesSuc(res.data)))
  .catch(()=>dispatch(getMatchesFail()))
},[])
  

  return <div data-testid="match-list" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)"}} >{
    matchData?.map((e)=><MatchCard id={e.id} competition={e.competition} year={e.year} team1={e.team1} team2={e.team2} />)
  }</div>;
};
