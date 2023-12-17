import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTheme } from '../Redux/action'

const Theme = () => {

    const dispatch=useDispatch()
    const theme=useSelector((store)=>store.themeReducer.theme)
    console.log(theme)

    const handleLight=()=>{
        dispatch(handleTheme("light"))
    }

    const handleDark=()=>{
        dispatch(handleTheme("dark"))
    }

  return (
    <div>
        <button  disabled={theme=="light"} onClick={handleLight} >Switch to Light</button>
        <button  disabled={theme=='dark'} onClick={handleDark} >Switch to Dark</button>
    </div>
  )
}

export default Theme