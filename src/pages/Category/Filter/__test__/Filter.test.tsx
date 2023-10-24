import { render } from '@testing-library/react';

// components
import { Filter } from '../index';

describe('BannerCategory component', () => {
  const mockHandleSearchByName = jest.fn();
  it('renders component correctly', () => {
    const { asFragment } = render(<Filter onSearchByName={mockHandleSearchByName} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
