import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable  from '../Components/ProductsTable'
import { Navigate } from "react-router-dom";
import Loader from '../Components/Loader'

function Dashboard() {
  const {token,logout}=useContext(AuthContext)
  const [loading,setLoading]=useState(false)

  const [data,setData]=useState([])
  useEffect(()=>{
    setLoading(true)
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`)
    .then((res)=>res.json())
    .then((act)=>setData(act.data))
    .catch((err)=>console.log(err))
    .finally(()=>{
      setLoading(false)
    })
  },[])

 

  return (
    <div>
      {loading?<Loader/>:""}
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logout}>Logout</button>
        <p>
          Token: 
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        {<ProductsTable data={data}/>}
      </div>
    </div>
  );
}

export default Dashboard;
