import "./styles.css";
import { useState } from "react";
import Data from "./Data";
export default function App() {
  const [data, getData] = useState(true);

  return (
    <div className="App">
      <button onClick={() => getData(!data)}>GetData</button>
      {data ? <Data /> : ""}
    </div>
  );
}
