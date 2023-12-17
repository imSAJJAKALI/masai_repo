import React, { createContext,useState } from 'react'
import App from '../App'


export const ThemContext=createContext()

export default function ThemeContextProvider({children}) {
  
 const [isDarkTheme,setIsDarkTheme]=useState(false)

  return (
     <ThemContext.Provider value={{isDarkTheme,setIsDarkTheme}}>
      {children}
     </ThemContext.Provider>
  )
}
