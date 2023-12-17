import { useEffect, useState } from "react";
import { EmployeeCard } from "./Employeecard";


const Employeedashboard = () => {
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
 
  useEffect(()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?&limit=10&page=1`)
    .then((res)=>res.json())
    .then((actData)=>setData(actData.data))
    .catch((error)=>console.log(error))
  },[])
  console.log(data)

  return (
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
        {/* map through the data and make use of EmployeeCard*/}
        {data.map((e)=><EmployeeCard 
        name={e.name}
        department={e.department}
        image={e.image}
        gender={e.gender}
        salary={e.salary}
        />)}
      
      </tbody>
    </table>   
  );
};

export default Employeedashboard;
