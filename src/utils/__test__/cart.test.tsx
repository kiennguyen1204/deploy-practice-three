import { MOCK_CART } from 'mocks/mockData';
import { MOCK_PRODUCT } from 'mocks/mockData';
import { handleAddToCartWithToast } from '../cart';

const mockOnAddToCart = jest.fn();
const mockShowToast = jest.fn();

const MESSAGES = {
  EXIST_PRODUCT: 'Product already exists in the cart',
  ADD_NEW_PRODUCT_SUCCESS: 'Add product success'
};

describe('handleAddToCartWithToast', () => {
  it('should show error toast when product already exists in the cart', async () => {
    await handleAddToCartWithToast(MOCK_PRODUCT, MOCK_CART, mockOnAddToCart, mockShowToast);
    expect(mockShowToast).toHaveBeenCalledWith('error', MESSAGES.EXIST_PRODUCT);
  });

  it('should call onAddToCart and show success toast when product is added successfully', async () => {
    const newProduct = { ...MOCK_PRODUCT, id: '2', name: 'Product B' };
    await handleAddToCartWithToast(newProduct, MOCK_CART, mockOnAddToCart, mockShowToast);
    expect(mockOnAddToCart).toHaveBeenCalledWith(newProduct);
    expect(mockShowToast).toHaveBeenCalledWith('success', MESSAGES.ADD_NEW_PRODUCT_SUCCESS);
  });
});
