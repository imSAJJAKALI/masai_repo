import { useSelector } from "react-redux";
import { MatchCard } from "../Components/MatchCard";

const image='https://kizoop.com/wp-content/uploads/2022/11/gradient-world-footbal-championship-illustration_23-2149709272.webp'

export const WatchListPage = () => {
  const watchList=useSelector((store)=>store.watchListReducer.watchList)
  console.log(watchList)
  return (
    <div>
      <div data-testid="watch-list" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr"}}>
        {watchList?.map((el)=>
       
     <div>
        <img  src={image} alt="" width={"200px"} style={{borderRadius:"20px",margin:"10px"}} />
        <h3 >{el.competition}</h3>
        <p >{el.year}</p>
        <h3 >{el.team1}</h3>
        <h3 >{el.team2}</h3>
      
       </div>
        )}
      </div>
    </div>
  );
};
