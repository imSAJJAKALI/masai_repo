
import React from "react";
import Employeedashboard from "./Componenets/Employeedashboard";
import Pagination from "./Componenets/pagination";
function App() {
   
  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        {/* add your employee dashboard component here */}
        <Employeedashboard/>
    
      </div>
      {/* add your pagination component here */}
      <Pagination/>
   
    </div>
  );
}

export default App;
