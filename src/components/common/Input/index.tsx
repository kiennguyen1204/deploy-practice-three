import { ReactElement, memo } from 'react';

// constants
import { INPUT_SIZE, INPUT_TYPE, INPUT_VARIANT } from 'constants/enums';

// styles
import './index.css';

export interface Props {
  name?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  title?: string;
  variant?: INPUT_VARIANT;
  type?: INPUT_TYPE;
  size?: INPUT_SIZE;
  onChange?: (value: string) => void;
}

const Input = ({
  name,
  value,
  placeholder,
  title,
  className,
  variant = INPUT_VARIANT.DEFAULT,
  type = INPUT_TYPE.TEXT,
  size = INPUT_SIZE.MEDIUM,
  onChange
}: Props): ReactElement => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <section className='text-wrapper'>
      {title && <label>{title}</label>}
      <input
        className={`text-input text-input-${variant} input-${size} ${className}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </section>
  );
};

export default memo(Input);
