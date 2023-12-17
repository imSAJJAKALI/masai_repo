import {  useState } from "react";
import "./App.css";
import Product from "./components/Product";
import data from "./db.json";
function App() {
  // const [datas,setData]=useState([])
  const [quantity,setQuantity]=useState(1)

  const handleQty=(num)=>{
    setQuantity(quantity+num)
  }
 
  let total=0;
  data.map((e)=>
  total+=e.price*e.quantity
  )

 

console.log(total)
 
  // useEffect(()=>{
  //   setData(data)
  // },[])

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
         {/* map through the  data and pass props to the Product component */}
         {data.map((e)=><Product
         name={e.name}
         price={e.price}
         quantity={quantity}
         id={e.id}
         handleQty={handleQty}
         />)}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}

Total {total}
        
      </h1>
    </div>
  );
}

export default App;
