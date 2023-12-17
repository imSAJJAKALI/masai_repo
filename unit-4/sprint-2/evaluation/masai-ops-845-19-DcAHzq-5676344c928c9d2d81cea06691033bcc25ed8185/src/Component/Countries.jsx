import LoadingIndicator from "./LoadingIndicator";
import { useState,useEffect } from "react";
import CountriesCard from "./CountriesCard";

const style={
  border:'1px solid red',
  display:'flex',
  padding:'20px',
  justifyContent:'space-between',
  margin:'5px',
}

const getData=(url)=>{
  return fetch(url).then((res)=>res.json())
}


function Countries() { 
  const [sData,setSdata]=useState([])

  const fetchUpdateData= async ()=>{
   try{
      let data = await getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?_limit=10&_page=1`)
      asc(data.data)
      setSdata(data.data)
   }catch(err){
       console.log(err)
   }
  }
    const asc =(data)=>{
      let ans= data.sort((a,b)=>(a.population>b.population)?1:((b.population>a.population)? -1 :0))
      setSdata(ans)
   }
   const desc =(data)=>{
    let ans= data.sort((b,a)=>(a.population>b.population)?1:((b.population>a.population)? -1 :0))
    setSdata(ans)
    console.log(sData)
  }
 
 useEffect(()=>{
   fetchUpdateData()
 },[])
  
 
 
 

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <select><option value="none">Normal</option><option value="asc" >Ascending</option><option value="desc" >Descending</option></select>
      <div data-testid="countries-container">
        {sData.map((el)=><CountriesCard country={el.country} population={el.population}/>)}
        
      </div>
      <div>
        {/* Pagination */}
      </div>
    </div>
  );
}

export default Countries;
