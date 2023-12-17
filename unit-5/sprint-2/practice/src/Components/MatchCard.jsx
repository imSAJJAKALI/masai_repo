import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWatchList } from "../Redux/WatchList/action";

const image='https://kizoop.com/wp-content/uploads/2022/11/gradient-world-footbal-championship-illustration_23-2149709272.webp'

export const MatchCard = (data) => {
  const dispatch=useDispatch()
 const {competition,year,team1,team2,team1goals,team2goals}=data
 const watchList=useSelector((store)=>store.watchListReducer.watchList)
 

 const handleWatchList=()=>{
  dispatch(addWatchList(data))
 }
 
 return (
    <div className="match-card" style={{margin:"10px",backgroundColor:"gray",borderRadius:"10px"}} >
     
     <img className="match-image" src={image} alt="" width={"200px"} style={{borderRadius:"20px",margin:"10px"}} />
     <h3 className="competition-name">{competition}</h3>
     <p className="match-year">{year}</p>
     <h3 className="team-1">{team1} - {team1goals}</h3>
     <h3 className="team-2">{team2} - {team2goals}</h3>
     <button onClick={handleWatchList} className='add-to-watchlist'>WatchList</button>
    </div>
  );
};
