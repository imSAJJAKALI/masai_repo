
import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
 try {
  return await fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`)
  .then((res)=>res.json())
 } catch (error) {
  return console.log(error)
 }
};

function FlightSearch() {
  // on page load fetch the data (useEffect)
  const [data,setData]=useState([])
  const [sorce,setSorce]=useState('')
  const [dest,setDest]=useState('')
  const [change,setChange]=useState([])
  useEffect(()=>{
  fetchData().then((actData)=>setData(actData))
   
  },[])


  const handleSearch = () => {
    // filter the data based on source and destination
   const ChangeData= data.filter((e)=>
    e.source==sorce&&e.destination==dest
    )
    setChange(ChangeData)
    // console.log(ChangeData)
  };
  console.log(change)
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source" onChange={(e)=>setSorce(e.target.value)}/>
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" onChange={(e)=>setDest(e.target.value)}/>
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>Search</button>
        </section>
      </div>
      { change.length?<SearchResults data={change}/>:
      <div data-testid="no-flights" className="">
            No Flights Found
          </div>
          }
    </div>
  );
}

export default FlightSearch;
