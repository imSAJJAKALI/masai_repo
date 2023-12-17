import React, { useEffect } from "react";
import { getMatches } from "../Redux/Matches/action";
import { useDispatch, useSelector } from "react-redux";
import { MatchCard } from "./MatchCard";

export const MatchList = () => {
  const {isLoading,isError,matches} = useSelector((store)=>store.matchReducer)
  
  const dispatch=useDispatch()

if(isLoading){
  return <div>Is Loading.....</div>
}

if(isError){
  return <div>404 Not found</div>
}


  return <div data-testid="match-list" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",margin:"10px"}}>
    {matches?.map((el)=><MatchCard key={el.id} {...el}/>)}
  </div>;
};
