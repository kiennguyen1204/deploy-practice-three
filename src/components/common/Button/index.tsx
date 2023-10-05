import { memo } from 'react';

// constants
import {
  BUTTON_COLOR,
  BUTTON_COLOR_TEXT,
  BUTTON_SIZE,
  BUTTON_TYPE,
  BUTTON_VARIANT
} from 'constants/enums';

// styles
import './index.css';

export interface Props {
  label?: string;
  className?: string;
  variant: BUTTON_VARIANT;
  size?: BUTTON_SIZE;
  color?: BUTTON_COLOR;
  colorText?: BUTTON_COLOR_TEXT;
  type?: BUTTON_TYPE;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

const Button = ({
  label,
  variant = BUTTON_VARIANT.PRIMARY,
  size = BUTTON_SIZE.SMALL,
  color = BUTTON_COLOR.DEFAULT,
  colorText = BUTTON_COLOR_TEXT.PRIMARY,
  type = BUTTON_TYPE.BUTTON,
  isDisabled,
  isLoading,
  onClick,
  className,
  icon
}: Props): React.ReactElement => {
  const classes = `btn btn-${variant} btn-color-${color} btn-${size} ${
    isDisabled ? 'btn-disabled' : ''
  } ${isLoading ? 'btn-loading' : ''} ${className || ''}`;

  const colorTextClass = `btn-color-text-${colorText}`;

  return (
    <button
      type={type}
      className={`${classes} ${colorTextClass}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}>
      {isLoading && <span className='loader'></span>}
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default memo(Button);
