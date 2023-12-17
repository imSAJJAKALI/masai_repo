import React, { useContext, useEffect, useState } from 'react'
import { ThemContext } from '../Context/ThemeContextProvider'
import data from '../db.json'
import User from './User'

export const Dashboard = () => {
const {isDarkTheme,setIsDarkTheme}=useContext(ThemContext);

const handleChange=(e)=>{
if(e.target.value==="light")
{
    setIsDarkTheme(false)
}
if(e.target.value==="dark"){
    setIsDarkTheme(true)
}

}

   
    return (
        <div data-testid = "dashboard-cont" style={{backgroundColor:!isDarkTheme?"white":"black"}}>
            <select data-testid = "select-theme"
               onChange={handleChange}
            >
                <option value='light'>Light Theme</option>
                <option value='dark'>Dark Theme</option>
            </select>
            <h1>All Active Users</h1>
          {data.map((e)=><User isDarkTheme={isDarkTheme} user={e} />)}
        </div>
)
}
