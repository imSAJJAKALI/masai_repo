import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Counter from './Components/Counter';

function App() {

  const handleClick=()=>{
    console.log('clicked Hello!')
  }

  return (
    <div className="App">
   {/* <Button
   children={'hello'}
   size={'large'}
   color={'red'}
   func={handleClick}
   /> */}
  <button data-testid='test_btn' >zeo</button>
  <button data-testid='test_btn' >HELLO</button>
  <button data-testid='test_btn' >BY</button>
  <button data-testid='test_btn' >CLICK</button>
 <hr/>

 <Counter/>

    </div>
  );
}

export default App;
