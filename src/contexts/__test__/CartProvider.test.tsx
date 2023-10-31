import { useContext } from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';

// contexts
import CartProvider, { CartContext } from '../CartProvider';

// services
import * as apiActions from 'services/api-action';

// mocks
import { MOCK_CART } from 'mocks/mockData';

// interfaces
import { Cart } from 'interfaces/cart';
import { Product } from 'interfaces/item';

jest.mock('services/api-action');

describe('CartProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches cart products when mounted', async () => {
    const mockGetCartProducts = jest.spyOn(apiActions, 'getCartProducts');
    mockGetCartProducts.mockResolvedValueOnce(MOCK_CART);
    render(
      <CartProvider>
        <CartContext.Consumer>
          {({ onGetCart }) => <button onClick={onGetCart}>Get Cart</button>}
        </CartContext.Consumer>
      </CartProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText('Get Cart'));
    });

    expect(mockGetCartProducts).toHaveBeenCalledTimes(2);
  });

  it('deletes product from cart when onDeleteProductFromCart is called', async () => {
    const mockDeleteCartItem = jest.spyOn(apiActions, 'deleteCartItem');
    mockDeleteCartItem.mockResolvedValueOnce({} as Cart);
    const TestComponent = () => {
      const { onDeleteProductFromCart } = useContext(CartContext);
      return <button onClick={() => onDeleteProductFromCart('1')}>Delete Product</button>;
    };

    const { getByText } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await act(async () => {
      fireEvent.click(getByText('Delete Product'));
    });

    expect(mockDeleteCartItem).toHaveBeenCalledWith('1');
  });

  it('updates product in cart when onUpdateCart is called', async () => {
    const mockUpdateItem = jest.spyOn(apiActions, 'updateItem');
    mockUpdateItem.mockResolvedValueOnce({} as Product);
    const TestComponent = () => {
      const { onUpdateCart } = useContext(CartContext);
      return (
        <button onClick={() => onUpdateCart('1', { name: 'Updated Product 1' })}>
          Update Product
        </button>
      );
    };

    const { getByText } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await act(async () => {
      fireEvent.click(getByText('Update Product'));
    });

    expect(mockUpdateItem).toHaveBeenCalledWith('1', { name: 'Updated Product 1' });
  });
});
