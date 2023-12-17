import React from "react";
var count =0;

function App() {
const [count, counterfunction] = React.useState(0);
// const [prime,setPrime]=React.useState(false)




function plusFunc(){
  counterfunction(count+1);
 
}

function minusFunc(){
if(count>0)  counterfunction(count-1)
}

function setTozero(){
  counterfunction(0)
}
function checkPrime(n){
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

var prime=checkPrime(count)
  
  return (
    <div>
      <div>
        <h1>Welcome to Counter 2.0</h1>
        <button data-testid="minusonebtn" onClick = {minusFunc} >-1</button>
        <button data-testid="plusonebtn" onClick={plusFunc} >+1</button>
      <div>
        <button data-testid="resetbtn" onClick={setTozero}>Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">count: {count} </span>
      <div>
        <span data-testid="odd-or-even">This number is even: {(count%2==0)?'Even':'Odd'}</span><br />
        <span data-testid="is-prime">This number is prime: {(prime)?'true': 'false'}</span>
      </div>
    </div>
  );

}

export default App;

