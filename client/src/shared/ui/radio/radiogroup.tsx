import Radio from "antd/es/radio/radio";
import styles from './button.module.css';
import cn, { Value } from 'classnames';
import React, { Children, useState } from 'react';

export type T = {
  label? : string;
  value? : string;
}

type Props = (
  items? : Array<T>,

)
export  const Radiogroup = (items  : Props) => {



  const [value, setValue] = useState<string | null >(null)
  return (<>
  {items.map(item => (
    <div key={item.value}>
      <Radio
        id={item.label}
        checked={value ===item.value}
        onChange={e=>setValue(e.target.value)}
      >{item.value}</Radio>

    </div>
  ))}
  </>)
}