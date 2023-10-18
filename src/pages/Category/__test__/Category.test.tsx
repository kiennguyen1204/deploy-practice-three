import { render, fireEvent } from '@testing-library/react';
import { CategoryProduct } from '../index';

describe('BannerCategory component', () => {
  it('renders component correctly', () => {
    const { asFragment } = render(<CategoryProduct />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('performs add to cart action', () => {
    const { getByText } = render(<CategoryProduct />);
    const addToCartButton = getByText('Add to cart');
    fireEvent.click(addToCartButton);
  });
});
