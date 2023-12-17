import { useEffect, useState } from "react";

const useDarkMode = (payload) => {
   const [isDarkMode,setIsDarkMode]=useState(false)
   const toggleDarkMode=()=>{
    setIsDarkMode(!isDarkMode)
    localStorage.setItem("use-dark-mode", !isDarkMode);
   }
   useEffect(()=>{
    const userPreference=JSON.parse(localStorage.getItem("use-dark-mode"));
    userPreference && setIsDarkMode(userPreference);
   },[]);
   return [isDarkMode,toggleDarkMode];

};

export default useDarkMode;
