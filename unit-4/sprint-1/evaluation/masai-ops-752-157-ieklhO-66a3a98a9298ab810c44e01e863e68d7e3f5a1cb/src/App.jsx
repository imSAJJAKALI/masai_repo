import { useState } from "react";


function App() {
  const [count,setCount]=useState(0)

const prime=(n)=>{
  let count=0;
  for(let i=1; i<=n; i++){
    if(n%i==0){
      count++
    }
  }
  if(count==2){
    return true
  }else{
    return false
  }
}
console.log(prime(5))
console.log(prime(6))

  return (
    <div>
      <div>
        <h1>Welcome to Counter 2.0</h1>
        <button data-testid="minusonebtn" disabled={count==0} onClick={()=>setCount(count-1)}>-1</button>
        <button data-testid="plusonebtn" onClick={()=>setCount(count+1)}>+1</button>
      <div>
        <button data-testid="resetbtn" onClick={()=>setCount(count*0)}>Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">Count {count}</span>
      <div>
        <span data-testid="odd-or-even">This Number is: {(count%2==0)?'Even': 'Odd'}</span>
        <br />
        <span data-testid="is-prime">Prime Number: {prime(count)?'true':'false'}</span>
      </div>
    </div>
  );

}

export default App;

