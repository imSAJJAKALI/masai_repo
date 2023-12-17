import React, { useState } from "react";
import CartButton from "./CartButton";

const GroceryItem = (props) => {
  // recive name, image, and price as props
  // console.log(props)
  const [atc,setAtc]=useState(true)

  return <div className="grocery_card" key={props.keys} data-cy='container'>
    <img src={props.image} alt="" width={200} />
    <h3>{props.name}</h3>
    <h5>{props.price}</h5>
    {atc?<button data-cy='add_to_cart' onClick={()=>setAtc(!atc)}>Add to Cart</button>:<CartButton />}
  </div>;
};

export default GroceryItem;
