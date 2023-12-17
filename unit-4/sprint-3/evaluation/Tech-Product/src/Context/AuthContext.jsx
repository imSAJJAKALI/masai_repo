import { createContext, useState } from "react";

export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const [isAuth,setIsAuth]=useState(false)
    const [token,setToken]=useState(null)

    const login=(token)=>{
        if(!token==""){
            setIsAuth(true)
            setToken(token)
        }
    }
    const logout=(token)=>{
        alert('ahkahk')
        if(token==""){
            setIsAuth(false)
            setToken(null)
        }
    }

    return(
        <AuthContext.Provider value={{isAuth,token,login,logout}}>
          {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
