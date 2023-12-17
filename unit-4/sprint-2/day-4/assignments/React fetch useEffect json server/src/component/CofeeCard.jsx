import React from "react";

const CofeeCard = ({id,image,title,price,description,ing}) => {
  // console.log(ing)
  return (
    <div className="coffee_card" key={id}>
      <img src={image} />
      <div>
        <h2 className="title">{title}</h2>
        <p className="price">₹ {price}</p>
        <p>{description}</p>
<p>Ingredient</p>
       {ing.map((e)=><ul><li>{e}</li></ul>)} 
      </div>
    </div>
  );
};

export default CofeeCard;
