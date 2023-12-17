import { useEffect } from "react";
import { useState } from "react";

const useTimeout = (delay) => {
    const [ready,setReady]=useState(false)
    useEffect(()=>{
    const timeout=  setTimeout(()=>{
       setReady(true)
      },[delay])
      return ()=>clearTimeout(timeout)
    },[delay])
    return {ready}
};

export default useTimeout;
