import { useEffect, useState } from "react";
// import Pagination from "./Pagination";


export const EmployeesTable = () => {
const [data,setData]=useState([])
const [page,setPage]=useState(1)
const [depart,setDepart]=useState('hr')
console.log(depart)
  useEffect(()=>{
 fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10&filterBy=department&filterValue=${depart}`)
 .then((res)=>res.json())
 .then((act)=>setData(act.data))
 .catch((err)=>console.log(err))
  },[page,depart])
 
  let arr=new Array(9).fill(0)
  const Pagination=({num})=>{

    return <button  data-testid="page-btn" disabled={page==num} onClick={()=>setPage(num)}>{num}</button>
  }

  return (
    <div>
      <div>
        <div>
          <select name="" id="" onChange={(e)=>setDepart(e.target.value)} className ='department_list'>
            <option value="department">--Select Department--</option>
            <option value="hr" >hr</option>
            <option value="finance" >finance</option>
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
              <th >Name</th>
              <th >Gender</th>
              <th >Department</th>
              <th >Salary</th>
            </tr>
          </thead>
          <tbody className="tbody">{
            data.map((e)=><tr><td>{e.id}</td>
            <td className = 'name'>{e.name}</td>
            <td className = 'gender'>{e.gender}</td>
            <td className = 'department'>{e.department}</td>
            <td className = 'Salary'>{e.salary}</td>
            </tr>)
          }</tbody>
        </table>
      </div>
      {arr.map((e,i)=> <Pagination num={i+1}/>)}
    </div>
  );
};
