import { render, screen, fireEvent } from '@testing-library/react';

// constants
import {
  BUTTON_COLOR,
  BUTTON_COLOR_TEXT,
  BUTTON_SIZE,
  BUTTON_TYPE,
  BUTTON_VARIANT
} from 'constants/enums';

// components
import Button, { Props } from 'components/common/Button';

const setup = (props = {}) => {
  const defaultProps: Props = {
    label: 'Submit',
    variant: BUTTON_VARIANT.PRIMARY,
    onClick: jest.fn(),
    isLoading: false,
    ...props
  };

  render(<Button {...defaultProps} />);
};

describe('Button component', () => {
  test('renders button correctly', () => {
    setup();
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toMatchSnapshot();
  });

  test('renders button with secondary variant', () => {
    setup({ variant: BUTTON_VARIANT.SECONDARY });

    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toMatchSnapshot();
  });

  test('renders button with primary variant', () => {
    setup({ variant: BUTTON_VARIANT.PRIMARY });

    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toMatchSnapshot();
  });

  it('renders with default variant (PRIMARY)', () => {
    setup({ variant: undefined });
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('btn-primary');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    setup({ onClick: handleClick });

    const buttonElement = screen.getByText('Submit');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders button with loading spinner when isLoading is true', () => {
    setup({ isLoading: true });

    const loaderElement = screen.getByRole('button');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should be disabled when isDisabled prop is true', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button
        label='Test Button'
        isDisabled={true}
        onClick={onClick}
        variant={BUTTON_VARIANT.PRIMARY}
      />
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should not be disabled when isDisabled prop is false', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button
        label='Test Button'
        isDisabled={false}
        onClick={onClick}
        variant={BUTTON_VARIANT.PRIMARY}
      />
    );
    const button = getByText('Test Button');
    fireEvent.click(button);
    expect(button).not.toBeDisabled();
    expect(onClick).toHaveBeenCalled();
  });

  it('renders a small button when size is SMALL', () => {
    setup({ size: BUTTON_SIZE.SMALL });
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('btn-sm');
  });

  it('renders a blue button when color is BLUE', () => {
    setup({ color: BUTTON_COLOR.SUCCESS });
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('btn-color-success');
  });

  it('renders a button with white text when colorText is WHITE', () => {
    setup({ colorText: BUTTON_COLOR_TEXT.PRIMARY });
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('btn-color-text-primary');
  });

  it('renders a submit button when type is SUBMIT', () => {
    setup({ type: BUTTON_TYPE.SUBMIT });
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('disables the button when isLoading is true', () => {
    const onClickMock = jest.fn();
    setup({ isLoading: true, onClick: onClickMock });
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
    fireEvent.click(buttonElement);
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
