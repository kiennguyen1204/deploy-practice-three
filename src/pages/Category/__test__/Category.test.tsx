import { render, fireEvent } from '@testing-library/react';
import { CategoryProduct } from '../index';

describe('BannerCategory component', () => {
  it('renders component correctly', () => {
    const { asFragment } = render(<CategoryProduct searchValue={''} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('performs add to cart action', () => {
    const { getByText } = render(<CategoryProduct searchValue={''} />);
    const addToCartButton = getByText('Add to cart');
    fireEvent.click(addToCartButton);
  });

  it('should call handleSearchByName on searchValue change', () => {
    const mockHandleSearchByName = jest.fn();
    const { getByRole } = render(<CategoryProduct searchValue='' />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'some value' } });
    expect(mockHandleSearchByName).toHaveBeenCalled();
  });
});
