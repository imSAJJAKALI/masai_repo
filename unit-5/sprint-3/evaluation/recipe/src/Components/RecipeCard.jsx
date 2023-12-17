
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import {useSearchParams} from 'react-router-dom'
import { getRecipe } from '../Redux/RecipeReducer/action';

export const RecipeCard = ({id,image,name,type,category,price}) => {

const [searchParams]=useSearchParams()
const dispatch= useDispatch()

let Obj={
  params:{
    category:searchParams.getAll('category'),
    type:searchParams.getAll('type'),
    _sort:searchParams.get("order")&&"price",
    _order:searchParams.get('order')
  }
}

useEffect(()=>{
dispatch(getRecipe(Obj))
},[searchParams])


  return (
    <div className={"recipe-card"} style={{border:'1px solid blue' , padding:'10px', margin:'10px' }}>{/* Dispaly Recipe Details Here */}
    <img src={image} alt="" className="recipe-image" width={'250px'} />
    <h3 className="recipe-name">{name}</h3>
    <h2 className="recipe-type" style={{color: type=='veg'?"green":'red'}}>Type: {type}</h2>
    <p className="recipe-category">Category: {category}</p>
    <h3 className='recipe-price' >{price}</h3>
    <button className='recipe-detail'>
      <Link to={`/recipe/${id}`}>View Ingredients</Link>
    </button>
    </div>
  );
};
