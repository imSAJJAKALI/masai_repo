
import { useSelector } from 'react-redux';
import './App.css';

import AllRoutes from './pages/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  const store=useSelector((store)=>store)
  console.log(store)
  return (
    <div className="App">
   <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
