import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../Redux/RecipeReducer/action";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = () => {
const {isLoading,isError,recipe}=useSelector((store)=>store.recipeReducer)
const dispatch=useDispatch()




useEffect(()=>{
  dispatch(getRecipe())
},[])

  return (
    <div>
      <div data-testid="recipe-list" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)"}}>
        {/* Map through the recipe using the recipe card here */}
        {recipe?.map((el)=><RecipeCard key={el.id} {...el} />)}

      </div>
    </div>
  );
};
