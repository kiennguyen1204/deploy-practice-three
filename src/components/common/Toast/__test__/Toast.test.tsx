import { fireEvent, render, screen } from '@testing-library/react';

// components
import Toast from 'components/common/Toast';

const defaultProps = {
  status: 'success',
  message: 'Success message',
  onClose: jest.fn()
};

jest.useFakeTimers();

const setup = (props = {}) => {
  const mergedProps = { ...defaultProps, ...props };

  return render(<Toast {...mergedProps} />);
};

describe('Toast component', () => {
  const onCloseMock = jest.fn();
  const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders success toast correctly', () => {
    const { container, getByText } = setup();

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveClass('success');
    expect(getByText('Success message')).toBeInTheDocument();
  });

  it('renders error toast correctly', () => {
    const { container, getByText } = setup({ status: 'error', message: 'Error message' });

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveClass('error');
    expect(getByText('Error message')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const { getByLabelText } = setup({ onClose: onCloseMock });
    const closeButton = getByLabelText('Close');

    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should render the toast message with proper content', () => {
    const status = 'success';
    const message = 'This is a success message';

    render(<Toast status={status} message={message} onClose={onCloseMock} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('should call the onClose function after the specified timeout', () => {
    const timeout = 2000;

    render(<Toast status="success" message="Success!" onClose={onCloseMock} timeout={timeout} />);
    jest.advanceTimersByTime(timeout);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should clear the timer when unmounting', () => {
    const timeout = 2000;
    const { unmount } = render(
      <Toast status="success" message="Success" onClose={onCloseMock} timeout={timeout} />
    );

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalledWith(expect.any(Number));
  });

  it('should call the onClose function when close button is clicked', () => {
    const timeout = 2000;

    render(<Toast status="success" message="Success!" onClose={onCloseMock} timeout={timeout} />);
    fireEvent.click(screen.getByLabelText('Close'));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
