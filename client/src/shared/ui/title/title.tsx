 import cn from 'classnames';
import {Link} from 'react-router-dom';
import styles from './title.module.css';

export enum HeaderType{
basic = 'basic',
stylized = 'stylized',
reference = 'reference',
}
export enum HeaderSize {
  primary = 'primary',
  simple = 'simple',
  secondary = 'secondary',
}

type Props = {
style? : HeaderType;
size? : HeaderSize;
link? : string;
className?: string;
onClick? : (event: any) => void;
children?: React.ReactNode;
}

export const title = ({
  style= HeaderType.basic,
size = HeaderSize.simple,
link, className,
children,
onClick,
...restTooltipProps
} :Props) => {


  const titleClassName = cn(
    styles.root, 
    {[styles.basic] : style === HeaderType.basic,
      [styles.stylized] : style === HeaderType.stylized,
      [styles.reference] : style === HeaderType.reference,
    }, className
  );
  const titleSizeName = cn(
    styles.root, 
    {[styles.basic] : size === HeaderSize.primary,
      [styles.stylized] : size === HeaderSize.simple,
      [styles.reference] : size === HeaderSize.secondary,
    }, className
  );

  const title = (
      <div  
      className={titleClassName && titleSizeName}
      onClick={onClick}
      {...restTooltipProps}
       >
        {children}
       </div>
  )
  if (link) {
    return (
      <Link to={link} className={styles.linkContainer}>
        {title}
      </Link>
    );
  }
  return title;
}