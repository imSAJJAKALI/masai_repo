import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../Redux/Restaurant/action";
import RestaurantCard from "../Components/RestaurantCard";
import Pagination from "../Components/Pagination";

const HomePage = () => {
  const [page,setPage]=useState(1)
const {restaurants,isLoading,isError,totalPages}=useSelector((store)=>store.restaurantReducer)
const dispatch=useDispatch()


  // Show below loading indicator while data is being loaded
  
  useEffect(()=>{
    dispatch(getRestaurants(page))
  },[]) 
  // <h1 className="loading_indicator">Loading...</h1>;
 
    
  

  return (
    <div>
      {isLoading && <h1 className="loading_indicator">Loading...</h1>}
        {/* Import RestaurantCard.jsx and populate restaurants data */}
      <div className="restaurants_wrapper" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {restaurants?.map((el)=><RestaurantCard key={el.id} {...el}/>)}
      </div>
      {/* Import Pagination.jsx and pass required props*/}
      <Pagination pages={totalPages} page={page} setPage={setPage}/>
    </div>
  );
};

export default HomePage;
