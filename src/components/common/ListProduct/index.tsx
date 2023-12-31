import { memo, useCallback, useContext } from 'react';

// context
import { CartContext } from 'contexts/CartProvider';
import { ProductContext } from 'contexts/ProductsProvider';

// hooks
import { useToast } from 'hooks/useToast';

// utils
import { handleAddToCartWithToast } from 'utils/cart';

// interfaces
import { Product } from 'interfaces/item';

// components
import ItemCard from 'components/common/Item';
import Toast from '../Toast';

interface ProductListProps {
  products?: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }): JSX.Element => {
  const { onAddToCart } = useContext(ProductContext);
  const { cart } = useContext(CartContext);
  const { toast, showToast, hideToast } = useToast();

  const handleAddToCart = useCallback(
    async (productToAdd: Product): Promise<void> => {
      await handleAddToCartWithToast(productToAdd, cart, onAddToCart, showToast);
    },
    [cart, onAddToCart, showToast]
  );

  return (
    <>
      {products?.map((product) => (
        <ItemCard
          key={product.id}
          item={product}
          className={'btn-add-to-cart'}
          onAddToCart={handleAddToCart}
        />
      ))}
      {toast.openPopup && (
        <Toast status={toast.status} message={toast.message} onClose={hideToast} />
      )}
    </>
  );
};

export default memo(ProductList);
