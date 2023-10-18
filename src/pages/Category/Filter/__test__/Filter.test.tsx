import { render } from '@testing-library/react';

// components
import { Filter } from '../index';

describe('BannerCategory component', () => {
  it('renders component correctly', () => {
    const { asFragment } = render(<Filter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
