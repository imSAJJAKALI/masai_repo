import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Types from './Types'
import Favourite from './Favourite'
import PokemonPage from './PokemonPage'
import TypesSinglePage from './TypesSinglePage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/types' element={<Types/>}/>
             <Route path='/types/:id' element={<TypesSinglePage/>}/>
             <Route path='/favorites' element={<Favourite/>}/>
             <Route path='/pokemon/:id' element={<PokemonPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes