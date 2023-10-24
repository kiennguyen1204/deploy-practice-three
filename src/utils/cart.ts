import { Product } from 'interfaces/item';
import { MESSAGES } from 'constants/messages';

export const handleAddToCartWithToast = async (
  productToAdd: Product,
  cart: Product[],
  onAddToCart: (product: Product) => void,
  showToast: (status: string, message: string) => void
): Promise<void> => {
  if (cart.some((item) => item.id === productToAdd.id)) {
    showToast('error', MESSAGES.EXIST_PRODUCT);
  } else {
    await onAddToCart(productToAdd);
    showToast('success', MESSAGES.ADD_NEW_PRODUCT_SUCCESS);
  }
};
