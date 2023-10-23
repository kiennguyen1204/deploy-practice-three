import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';

// interface
import { Product } from 'interfaces/item';
import { Cart } from 'interfaces/cart';

// services
import {
  addToCart,
  deleteCartItem,
  getCartProducts,
  getProducts,
  updateItem
} from 'services/api-action';

interface ProductProviderProps {
  children: ReactNode;
}

export interface ProductContextProps {
  cart: Cart[];
  products: Product[];
  onGetProducts: () => void;
  onGetCart: () => void;
  onAddToCart: (product: Product) => void;
  onDeleteProductFromCart: (productId: string) => void;
  onUpdateCart: (productId: string, updatedData: Partial<Product>) => Promise<void>;
}

export const ProductContext = createContext<ProductContextProps>({
  cart: [],
  products: [],
  onGetProducts: () => {},
  onGetCart: () => {},
  onAddToCart: () => undefined,
  onDeleteProductFromCart: async () => undefined,
  onUpdateCart: async () => {}
});

const ProductsProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchListProducts = async () => {
    const productsData = await getProducts();
    setProducts(productsData);
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  const fetchCartProducts = async () => {
    const cartsData = await getCartProducts();
    setCart(cartsData);
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const handleAddToCart = useCallback(async (product: Product): Promise<void> => {
    const data = await addToCart(product);
    setProducts((prevCart: Product[]) => [...prevCart, data]);
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
      products,
      onGetProducts: fetchListProducts,
      onGetCart: fetchCartProducts,
      onAddToCart: handleAddToCart,
      onUpdateCart: handleUpdateItem,
      onDeleteProductFromCart: handleDeleteProductFromCart
    }),
    [cart]
  );

  return <ProductContext.Provider value={cartContextValue}>{children}</ProductContext.Provider>;
};

export default ProductsProvider;
