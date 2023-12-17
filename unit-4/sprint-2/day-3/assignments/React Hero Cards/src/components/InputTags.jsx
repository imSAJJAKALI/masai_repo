import { useEffect, useState } from 'react';
import Card from './Card';
const InputTags=()=>{
    const [data,setData]=useState([])
    const [inputs,setInput]=useState({
        name:'',
        height:'',
        weidth:'',
        power:'',
    })
  
    const inputHandler=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput({
            ...inputs,
           [name]:value,
           
        })
    }
console.log(inputs)

    return(
        <>
        <form>
            <input data-testid="input-name" type="text" placeholder='Enter SuperHero name' 
              name='name'
              value={inputs.name}
              onChange={inputHandler}
            />
            <input data-testid="input-height" type="text" placeholder='Enter Superhero height'
            name='height'
            value={inputs.height}
              onChange={inputHandler}
            />
            <input data-testid="input-weight" type="text" placeholder='Enter Superhero weight'
            name='weidth'
            value={inputs.weidth}
              onChange={inputHandler}
            />
            <input data-testid="input-power" type="text" placeholder='Enter Superhero power'
            name='power'
            value={inputs.power}
              onChange={inputHandler}
            /> 
            <button data-testid="add-button" onClick={()=>setData(inputs)} >Add SuperHero</button>
        </form>
        <button data-testid="most-powerfull">Most Powerful Superhero</button>
        <button data-testid="all-superheroes">Show All</button>
        <Card/>
        </>
    )
}

export default InputTags;
