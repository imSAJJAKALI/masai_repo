import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

function Countries() { 
const [data,setData]=useState([])
const [load,setLoad]=useState(false)
const [page,setPage]=useState(1)

useEffect(()=>{
  Crud()
},[page])

const Crud= async()=>{

  try {
    setLoad(true)
    await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
    .then((res)=>res.json())
    .then((actData)=>setData(actData.data))
    setLoad(false)
  } catch (error) {
    console.log(error)
  }
}


  

    if(load)return <LoadingIndicator/>

  

  return (
    <div>
     
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {data.map((e)=><CountriesCard unq={e.id} country={e.country} population={e.population} />)}
      </div>
      <div>
        {<Pagination page={page}  prevb={()=>setPage(page-1)} nextb={()=>setPage(page+1)}/>}
    
    
      </div>
    </div>
  );
}

export default Countries;
