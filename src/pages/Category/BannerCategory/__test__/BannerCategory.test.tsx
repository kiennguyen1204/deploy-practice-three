import { render, fireEvent } from '@testing-library/react';

// components
import { BannerCategory } from '../index';

describe('BannerCategory component', () => {
  it('renders component correctly', () => {
    const { asFragment } = render(<BannerCategory />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('performs add to cart action', () => {
    const { getByText } = render(<BannerCategory />);
    const addToCartButton = getByText('Add to cart');
    fireEvent.click(addToCartButton);
  });
});
