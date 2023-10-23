import { Product } from 'interfaces/item';

export const handleAddToCartWithToast = async (
  productToAdd: Product,
  cart: Product[],
  onAddToCart: (product: Product) => void,
  showToast: (status: string, message: string) => void
): Promise<void> => {
  if (cart.some((item) => item.id === productToAdd.id)) {
    showToast('error', 'Product already exists in the cart');
  } else {
    await onAddToCart(productToAdd);
    showToast('success', 'Successfully added to cart');
  }
};
