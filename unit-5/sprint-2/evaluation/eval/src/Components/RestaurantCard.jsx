import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({image,name,type,number_of_votes,price_starts_from,rating,id}) => {
  return <>
    <div  className ="restaurant_card">
    <Link to={`/restaurant/${id}`} >
      <img src={image} className= "image" alt="" />
      <h3 className="name">Name:{name}</h3>
      <h4 className="type">Type:{type}</h4>
      <p className="votes">Votes:{number_of_votes}</p>
      <p className="price">Price:{price_starts_from}</p>
      <p className="rating">Rating:{rating}</p>
     </Link>
    </div>
  </>;
};

export default RestaurantCard;
