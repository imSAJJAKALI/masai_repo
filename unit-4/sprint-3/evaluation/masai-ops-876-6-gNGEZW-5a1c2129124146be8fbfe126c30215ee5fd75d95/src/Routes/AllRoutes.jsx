import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Login from './Login'
import SingleRestaurantPage from './SingleRestaurantPage'


function AllRoutes() {
  return (
    <div>
      <h1>All Routes</h1>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/restaurantpage' element={<SingleRestaurantPage/>}></Route>
     </Routes>
    </div>
  );
}

export default AllRoutes;
