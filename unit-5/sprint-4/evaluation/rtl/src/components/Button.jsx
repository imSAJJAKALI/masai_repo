import React from "react";

export const Button = ({name,onClick,"data-testid":testId}) => {
  return <button data-testid={testId} onClick={onClick}  >{name?name:"Click Me 2"}</button>;
};
