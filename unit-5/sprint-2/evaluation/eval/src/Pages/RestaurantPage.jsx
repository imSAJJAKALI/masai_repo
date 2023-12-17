import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
let url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
const RestaurantPage = () => {
  const [booked,setBooked]=useState(false)
  const [data,setData]=useState({})
  console.log(data)
  const pagno=useParams()
  useEffect(()=>{

    axios.get(`${url}/${pagno.id}`)
    .then((res)=>setData(res.data.data))
  },[])

  return (
    <div className="restaurant_single_wrapper">
      {/* Show success message here if restaurant booked successfully */}
      {booked && <h1 className="success_msg">Restaurant Booked Successfully !!</h1>}

      {/* Create Restaurant Details Card Here */}
     
      <img src={data.image} className= "image" alt="" />
      <h3 className="name">Name:{data.name}</h3>
      <h4 className="type">Type:{data.type}</h4>
      <p className="votes">Votes:{data.number_of_votes}</p>
      <p className="price">Price:{data.price_starts_from}</p>
      <p className="rating">Rating:{data.rating}</p>
      {booked?
      
      <Link to={`/`} className="go_back" >Go to Home</Link>:
      <Link className="book_now_btn" onClick={()=>setBooked(true)}>Book Now!</Link>
    }
   
    </div>
  );
};

export default RestaurantPage;
