import styles from './button.module.css';
import cn from 'classnames';
import {Link} from 'react-router-dom';
export enum ButtonType {
  button = 'button',
  submit = 'submit',
}

export enum DisplayMode {
  primary = 'primary',
  simple = 'simple',
  secondary = 'secondary',
  action = 'action',
  invisible = 'invisible',
}

type Props = {
  type?: ButtonType;
  displayMode?: DisplayMode;
  disabled?: boolean;
  link?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: any) => void;
 }& Omit<React.ComponentProps<'button'>, 'type'>;

export const MyButton = ({
  type = ButtonType.button,
  displayMode = DisplayMode.action,
  disabled = false,
  link,
  children,
  className,
  onClick,
   ...restTooltipProps
}: Props) => {
  const buttonClassName = cn(
    styles.root,
    {
      [styles.primary]: displayMode === DisplayMode.primary,
      [styles.secondary]: displayMode === DisplayMode.secondary,
      [styles.action]: displayMode === DisplayMode.action,
      [styles.simple]: displayMode === DisplayMode.simple,
    },
    className,
  );

  const button = (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      {...restTooltipProps}
     >
      {children}
    </button>
  );

  if (link) {
    return (
      <Link to={link} className={styles.linkContainer}>
        {button}
      </Link>
    );
  }

  return button;
};