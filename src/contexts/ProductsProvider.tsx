import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';

// interface
import { Product } from 'interfaces/item';

// services
import { addToCart, getProducts } from 'services/api-action';

interface ProductProviderProps {
  children: ReactNode;
}

export interface ProductContextProps {
  products: Product[];
  onGetProducts: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  onGetProducts: () => {},
  onAddToCart: () => undefined
});

const ProductsProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchListProducts = async () => {
    const productsData = await getProducts();
    setProducts(productsData);
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  const handleAddToCart = useCallback(async (product: Product): Promise<void> => {
    const data = await addToCart(product);
    setProducts((prevCart: Product[]) => [...prevCart, data]);
  }, []);

  const cartContextValue = useMemo(
    () => ({
      products,
      onGetProducts: fetchListProducts,
      onAddToCart: handleAddToCart
    }),
    [products]
  );

  return <ProductContext.Provider value={cartContextValue}>{children}</ProductContext.Provider>;
};

export default ProductsProvider;
