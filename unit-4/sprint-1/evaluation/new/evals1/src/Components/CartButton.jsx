import React, { useState } from "react";

const CartButton = () => {
  const [count,setCount]=useState(1)
  const [atc,setAtc]=useState(true)
  return <div className = 'change_quantity_container'>
    {/* use className and data-cy as given in problem */}
    
    {(atc&&count<1)?<button data-cy='add_to_cart' onClick={()=>setAtc(!atc)}>Add to Cart</button>:<div><button data-cy = 'inc_btn' onClick={()=>setCount(count+1)} >+</button>
    <button data-cy = 'dec_btn' onClick={()=>setCount(count-1)}>-</button>
    <p className='quantity'>{count}</p></div>}
    </div>;
};

export default CartButton;
