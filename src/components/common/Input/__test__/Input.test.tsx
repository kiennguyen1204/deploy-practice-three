import { render, screen, fireEvent } from '@testing-library/react';

// constants
import { INPUT_SIZE, INPUT_TYPE, INPUT_VARIANT } from 'constants/enums';

// components
import Input, { Props } from 'components/common/Input';

const defaultProps: Props = {
  name: 'test-input',
  value: '',
  onChange: jest.fn()
};

const renderInput = (props?: Partial<Props>) => {
  const mergedProps = { ...defaultProps, ...props };
  return render(<Input {...mergedProps} />);
};

describe('Input component', () => {
  it('renders an input field with default props', () => {
    renderInput();

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('name', 'test-input');
    expect(inputElement).toHaveValue('');
  });

  it('renders an input field with a custom type', () => {
    renderInput({ type: INPUT_TYPE.TEXT });

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('renders an input field with a custom placeholder', () => {
    renderInput({ placeholder: 'Enter your name' });

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('placeholder', 'Enter your name');
  });

  it('renders an input field with a custom title (label)', () => {
    renderInput({ title: 'Name' });

    const labelElement = screen.getByText('Name');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement.tagName).toBe('LABEL');
  });

  it('renders an input field with a custom variant class', () => {
    renderInput({ variant: INPUT_VARIANT.PRIMARY });

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('text-input-primary');
  });

  it('renders an input field with a custom size class', () => {
    renderInput({ size: INPUT_SIZE.LARGE });

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('input-lg');
  });

  it('calls onChange when input value changes', () => {
    const handleChange = jest.fn();
    renderInput({ onChange: handleChange });

    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(handleChange).toHaveBeenCalledWith('New Value');
  });

  it('calls onBlur when input loses focus', () => {
    renderInput();
    const inputElement = screen.getByRole('textbox');
    const handleBlur = jest.fn();

    inputElement.addEventListener('blur', handleBlur);
    fireEvent.blur(inputElement);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown when a key is pressed in the input', () => {
    renderInput();
    const inputElement = screen.getByRole('textbox');
    const handleKeyDown = jest.fn();

    inputElement.addEventListener('keydown', handleKeyDown);
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    expect(handleKeyDown).toHaveBeenCalledWith(expect.objectContaining({ key: 'Enter' }));
  });
});
