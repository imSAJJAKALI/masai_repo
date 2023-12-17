import React from "react";
import {useState,useEffect}from 'react'
// import { Await } from "react-router-dom";

function App() {
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
  const [totalPage,setTotalPage]=useState(1)
var pages=10;
useEffect(()=>{
fetch(` https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?&limit=12&page=${page}`)
.then((res)=>res.json())
.then((act)=>setData(act.data))
},[page])


const Pagination=({num})=>{

  return <button onClick={()=>setPage(num)}>{num}</button>
}

  



  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* map through the data*/}            
            {data.map((item) => 
              
              <tr>
                  <td  className="employee-card-name">{item.name}</td>
                  <td className="employee-card-department">{item.department}</td>
                  <td className="employee-card-image">{item.image}</td>
                  <td className="employee-card-gender">{item.gender}</td>
                  <td className="employee-card-salary">{item.salary}</td>
              </tr>
          )}            
          </tbody>
        </table>
      </div>
      {/* {<Pagination num={2}/>} */}
      {/* add your pagination here */}
 {/* {pages.map((e)=> console.log(e))} */}
     <button onClick={()=>setPage(1)}>1</button>
     <button onClick={()=>setPage(2)}>2</button>
     <button onClick={()=>setPage(3)}>3</button>
     <button onClick={()=>setPage(4)}>4</button>
     <button onClick={()=>setPage(5)}>5</button>
     <button onClick={()=>setPage(6)}>6</button>
     <button onClick={()=>setPage(7)}>7</button>
     <button onClick={()=>setPage(8)}>8</button>
     <button onClick={()=>setPage(9)}>9</button>
     {/* <button onClick={()=>setPage(10)}>10</button> */}
    </div>
  );
}

export default App;
