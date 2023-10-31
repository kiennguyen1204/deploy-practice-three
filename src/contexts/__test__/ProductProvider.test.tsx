import { useContext } from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';
import ProductsProvider, { ProductContext } from '../ProductsProvider';

// services
import * as apiAction from 'services/api-action';

// mocks
import { MOCK_PRODUCT } from 'mocks/mockData';

jest.mock('services/api-action', () => ({
  __esModule: true,
  getProducts: jest.fn(),
  addToCart: jest.fn()
}));

describe('ProductsProvider', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render children', () => {
    render(
      <ProductsProvider>
        <div data-testid='child'>Child Component</div>
      </ProductsProvider>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('should fetch products on mount', async () => {
    // Mock the getProducts function
    jest.spyOn(apiAction, 'getProducts').mockResolvedValue([MOCK_PRODUCT]);

    render(
      <ProductsProvider>
        <div data-testid='child'>Child Component</div>
      </ProductsProvider>
    );

    // Wait for the useEffect to fetch the products
    await screen.findByText('Child Component');

    // Assert that the products are set correctly
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('should add a product to the cart', async () => {
    const postProductMock = jest.spyOn(apiAction, 'addToCart');
    postProductMock.mockResolvedValue(MOCK_PRODUCT);

    const MockChildren = () => {
      const { onAddToCart } = useContext(ProductContext);

      return <button title='Add to cart' onClick={() => onAddToCart(MOCK_PRODUCT)} />;
    };

    const { getByRole } = render(
      <ProductsProvider>
        <MockChildren />
      </ProductsProvider>
    );

    const button = getByRole('button');

    await act(() => {
      fireEvent.click(button);
    });
    expect(postProductMock).toHaveBeenCalledWith(MOCK_PRODUCT);
  });
});
