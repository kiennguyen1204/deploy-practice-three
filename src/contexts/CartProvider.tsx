import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { Cart } from 'interfaces/cart';
import { addToCart, deleteCartItem, getCartProducts, updateItem } from 'services/api-action';
import { Product } from 'interfaces/item';

interface CartProviderProps {
  children: ReactNode;
}

export interface CartContextProps {
  cart: Cart[];
  onGetCart: () => void;
  onDeleteProductFromCart: (productId: string) => void;
  onUpdateCart: (productId: string, updatedData: Partial<Product>) => Promise<void>;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  onGetCart: () => {},
  onDeleteProductFromCart: async () => undefined,
  onUpdateCart: async () => {}
});

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const fetchCartProducts = async () => {
    const cartsData = await getCartProducts();
    setCart(cartsData);
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const handleDeleteProductFromCart = useCallback(async (productId: string): Promise<void> => {
    await deleteCartItem(productId);
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  }, []);

  const handleUpdateItem = useCallback(async (productId: string, updatedData: Partial<Product>) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((prevProduct) =>
        prevProduct.id === productId ? { ...prevProduct, ...updatedData } : prevProduct
      );
      return updatedCart;
    });
    await updateItem(productId, updatedData);
  }, []);

  const cartContextValue = useMemo(
    () => ({
      cart,
      onGetCart: fetchCartProducts,
      onUpdateCart: handleUpdateItem,
      onDeleteProductFromCart: handleDeleteProductFromCart
    }),
    [cart]
  );

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
