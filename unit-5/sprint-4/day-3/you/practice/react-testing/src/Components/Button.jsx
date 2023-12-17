import React from 'react'
import styles  from './button.module.css'


const Button = ({children,color,size,func}) => {
  return (
    <button className={`${styles[color]} ${styles[size]}`} onClick={func} >{children}</button>
  )
}

export default Button