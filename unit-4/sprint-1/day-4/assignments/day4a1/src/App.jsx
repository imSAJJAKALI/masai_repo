import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {
  const [state,setState]=useState(true)
  return (
    <div style={{margin:'auto'}}>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn"
      onClick={()=>setState(!state)}
      >{state?'Show Non-Fiction Books':'Show Fictional Books'}</button>

      <div data-testid="conditional-container">
        {state? <Fiction/> : <NonFiction/>}
       
        
      </div>
    </div>
  );
}

export default App;
