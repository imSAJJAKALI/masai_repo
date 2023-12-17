import React from "react";
import "./Input.css";
import propTypes from 'prop-types'

const Input = ({type,size='md',variant, value, onChange}) => {

  const handleChange=(e)=>{
    onChange(e)

  }

  return <input data-testid="inputTag" value={value} type={type ? type : "text" } className={`${size} ${variant}`} onChange={handleChange} />
}

export default Input


Input.propTypes={
  type:propTypes.string,
  size:propTypes.string,
  variant:propTypes.string.isRequired,
  value:propTypes.string,
  onChange:propTypes.func
}