import { render, screen } from '@testing-library/react';

// components
import LoadingSpinner from 'components/common/Loading/index';

describe('LoadingSpinner component', () => {
  it('renders the loading spinner', () => {
    render(<LoadingSpinner />);

    const spinnerContainer = screen.getByTestId('spinner-container');
    expect(spinnerContainer).toBeInTheDocument();

    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<LoadingSpinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
