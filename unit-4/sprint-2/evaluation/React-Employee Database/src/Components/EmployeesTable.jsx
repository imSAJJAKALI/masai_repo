import { useEffect, useState } from "react";
// import Pagination from "./Pagination";


export const EmployeesTable = () => {
const [data,setData]=useState([])
const [page,setPage]=useState(1)
const [depart,setDepart]=useState('')

  useEffect(()=>{
 fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10`)
 .then((res)=>res.json())
 .then((act)=>setData(act.data))
 .catch((err)=>console.log(err))
  },[page])
 
  let arr=new Array(9).fill(0)
  const Pagination=({num})=>{

    return <button onClick={()=>setPage(num)}>{num}</button>
  }

  return (
    <div>
      <div>
        <div>
          <select name="" id="" onChange={()=>setDepart()} className ='department_list'>
            <option value="department">--Select Department--</option>
            <option value="hr">hr</option>
            <option value="finance">finance</option>
            <option value="marketing">marketing</option>
            <option value="engineering">engineering</option>
            <option value="operations">operations</option>
          </select>
        </div>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody className="tbody">{
            data.map((e)=><tr><td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.gender}</td>
            <td>{e.department}</td>
            <td>{e.salary}</td>
            </tr>)
          }</tbody>
        </table>
      </div>
      {arr.map((e,i)=> <Pagination num={i+1}/>)}
    </div>
  );
};
