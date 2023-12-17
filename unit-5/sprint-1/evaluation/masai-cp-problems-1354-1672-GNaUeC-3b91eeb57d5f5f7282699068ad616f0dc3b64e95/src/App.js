import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import UserCard from "./Components/UserCard";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  //import the useDark mode hook here
  const [isDarkMode,toggleDarkMode]=useDarkMode(false)
  const [input,setInput]=useState("")

  const handleChange=(e)=>{
   setInput(e.target.value)
  }

  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode
    <div data-testid="app-component" 
    className={`App ${isDarkMode ? "dark-mode":""}`}>
      {/* to toggle the darkMode value of the application */}
      {/* Default value: Dark.  */}
      <button
      data-testid="theme-button"
       className="theme-button"
       onClick={toggleDarkMode}
       >
        {isDarkMode?"Light":"Dark"}
       </button>
      <UserCard 
      imageURL="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60" 
      avatarShape="round"
      name="User 1"
      title="Software Developer"
      description="Testing Description"
      backgroundColor="blue"
      
      />
      {/* use the UserCard component here */}

      <br />
      {/* use the Input component here */}
      <Input size="md" type="text"  value={input}
       variant="outline"
       
        onChange={handleChange} />

      <div data-testid="input-value">Input value is {input}</div>
    </div>
  );
}

export default App;

/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60
2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/
