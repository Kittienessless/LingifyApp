import styles from './checkbox.module.css';
 
import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
  isChecked? : boolean;
  onChange? : (event: any) => void;
}

export const Checkbox = ({children , isChecked, onChange } : Props) => {
  return (
    <label>
      <input 
      type='checkbox' 
      style={styles}
      checked={isChecked}
      onChange={onChange}
      ></input>
      <p>{children}</p>
    </label>
  )
}