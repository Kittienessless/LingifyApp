import styles from './radio.module.css';
 
import React from 'react';


type Props = {
  children?: React.ReactNode;
  value? :  string;
}

export const Radio = ({children, value } : Props) => {
  return (
    <label>
      <input 
      type='radio' 
      style={styles}
      value={value}
       ></input>
      <p>{children}</p>
    </label>
  )
}