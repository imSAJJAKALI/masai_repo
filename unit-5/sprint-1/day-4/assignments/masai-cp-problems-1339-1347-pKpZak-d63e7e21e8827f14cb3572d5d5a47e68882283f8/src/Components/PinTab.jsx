import React from "react";
import { Pin } from "./Pin";



export const PinTab = ({ length, maxChar, setOtp }) => {
  const ss=new Array(length).fill('a')
  return <div data-testid="pin-tab">
   {ss?.map((e)=>(<Pin maxChar={maxChar}/>))}
  </div>;
};

// Check length and maxChar props here
