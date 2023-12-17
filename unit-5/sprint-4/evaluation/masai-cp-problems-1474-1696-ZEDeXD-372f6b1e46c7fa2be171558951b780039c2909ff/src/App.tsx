import React from "react";
import { MainRoutes } from "./Pages/MainRoutes";

export interface prod{
  
    name: string;
    author: string;
    image: string;
    chapter: number;
    quantity: number;
    id?:number; 
  
}

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
