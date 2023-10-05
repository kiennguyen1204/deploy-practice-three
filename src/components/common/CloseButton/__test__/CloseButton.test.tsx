import { render, screen, fireEvent } from '@testing-library/react';

// components
import CloseButton from 'components/common/CloseButton';

describe('CloseButton', () => {
  it('should call the onClick function when clicked', () => {
    // Arrange
    const onClickMock = jest.fn();
    render(<CloseButton onClick={onClickMock} />);

    // Act
    fireEvent.click(screen.getByTestId('modal-close-button'));

    // Assert
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should render the close button with proper text', () => {
    // Arrange
    const onClickMock = jest.fn();
    render(<CloseButton onClick={onClickMock} />);

    // Assert
    expect(screen.getByRole('button')).toHaveTextContent('×');
  });

  it('should match the snapshot', () => {
    const onClickMock = jest.fn();
    const { container } = render(<CloseButton onClick={onClickMock} />);

    expect(container).toMatchSnapshot();
  });
});
