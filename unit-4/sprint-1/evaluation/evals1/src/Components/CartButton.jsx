import React, { useState } from "react";

const CartButton = () => {
  const [count,setCount]=useState(1)
  return <div className = 'change_quantity_container'>
    {/* use className and data-cy as given in problem */}
    <button data-cy = 'inc_btn' onClick={()=>setCount(count+1)} >+</button>
    <button data-cy = 'dec_btn' onClick={()=>setCount(count-1)} disabled={count<=1}>-</button>
    <p className='quantity'>{count}</p>
    </div>;
};

export default CartButton;
