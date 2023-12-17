import React, { useContext } from 'react'
import { ThemContext } from '../Context/ThemeContextProvider'

export default function User({isDarkTheme,user}) {
 
   
    return (
        <div data-testid = "user" style={{color:!isDarkTheme?"black":"white"}} >
            <img src={user.img} alt="" width={50}/>
            <h3>{user.name}</h3>
            <h3>{user.position}</h3>
            <input data-testid = "level" type = "range" style={isDarkTheme?{accentColor:'yellow'}:{accentColor:'blue'}}/>
            <p>{user.level}</p>
            <p>{user.points}</p>
            <br />
            <br />
        </div>
    )
}
