import { render, act, renderHook } from '@testing-library/react';
import { useToast } from '../useToast';

describe('useToast', () => {
  it('should initialize with correct initial state', () => {
    const { result } = renderHook(() => useToast());

    expect(result.current.toast).toMatchSnapshot();
  });

  it('should set toast with provided status and message when showToast is called', () => {
    let result: ReturnType<typeof useToast> | undefined;
    const TestComponent = () => {
      result = useToast();
      return null;
    };
    render(<TestComponent />);
    if (result) {
      const { showToast } = result;
      act(() => {
        showToast('success', 'This is a success message');
      });
      expect(result.toast.status).toBe('success');
      expect(result.toast.message).toBe('This is a success message');
      expect(result.toast.openPopup).toBe(true);
    }
  });

  it('should hide toast when hideToast is called', () => {
    let result: ReturnType<typeof useToast> | undefined;
    const TestComponent = () => {
      result = useToast();
      return null;
    };
    render(<TestComponent />);
    if (result) {
      const { showToast, hideToast } = result;
      act(() => {
        showToast('error', 'This is an error message');
      });
      expect(result.toast.openPopup).toBe(true);
      act(() => {
        hideToast();
      });
      expect(result.toast.openPopup).toBe(false);
    }
  });
});
