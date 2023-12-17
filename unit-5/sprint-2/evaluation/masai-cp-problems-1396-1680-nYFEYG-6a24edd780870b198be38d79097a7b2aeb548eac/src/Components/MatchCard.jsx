import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWatchList } from "../Redux/WatchList/action";

export const MatchCard = ({id,competition,year,team1,team2}) => {

  
  const dispatch=useDispatch()

  const handleAdd=()=>{
     dispatch (addWatchList({id,competition,year,team1,team2}))
  }

  return (
    <div className="match-card" key={id} style={{margin:"5px" ,border:"1px solid black"}} >
      {/* show the match details   */}
      {/* use any static image, its not provided in server data  */}
      <h3>{competition}</h3>
      <p>{year}</p>
      <h3>{team1}</h3>
      <h3>{team2}</h3>
      <button onClick={handleAdd} >WatchList</button>
    </div>
  );
};
