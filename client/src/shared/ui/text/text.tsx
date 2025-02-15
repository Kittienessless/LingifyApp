import styles from './text.module.css';
import cn from 'classnames';

export enum TextStyle {
  primary = 'primary',
  simple = 'simple',
  secondary = 'secondary',
}
type Props = {
  size?:TextStyle;
  className?: string;
  children?: React.ReactNode;
}
export const Text = ({
  size = TextStyle.simple,
  className, children,...restTooltipProps
}: Props) => {
  const textClassName = cn(
    styles.root,
    {
      [styles.primary]: size === TextStyle.primary,
      [styles.secondary]: size === TextStyle.secondary,
       [styles.simple]: size === TextStyle.simple,
      },
      className,
  );

  const Text = (
   <div className={textClassName}  {...restTooltipProps}>
      {children}
   </div>
  );

 

  return Text;
};