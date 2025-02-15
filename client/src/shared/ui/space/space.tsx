import styles from './space.module.css';
import classNames from 'classnames';

export enum SpaceType {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

type Props = {

  size? : SpaceType;
  className? : string;
  children? : React.ReactNode;

}

export const space = ({
  size = SpaceType.medium, 
  children, 
  className,
  ...restTooltipProps
}: Props) => {
  const spaceClassName = classNames(
    styles.root, 
    {[styles.small] : size === SpaceType.small,
      [styles.medium] : size === SpaceType.medium,
      [styles.large] : size === SpaceType.large,
    }, className
  );
  const space = (
    <div
    className={spaceClassName}
    {...restTooltipProps}
    >
       {children}
    </div>
  )

  return space;
}