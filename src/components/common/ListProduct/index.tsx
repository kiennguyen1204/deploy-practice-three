import { useEffect, useState } from 'react';

// services
import { getProducts } from 'services/api-action';

// interfaces
import { Product } from 'interfaces/item';

// components
import ItemCard from 'components/common/Item';

const ProductList: React.FC = (): JSX.Element => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  const handleAddToCart = () => {
    // TODO: handle add to cart
  };

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const productsData = await getProducts();
      setFeaturedProducts(productsData);
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <>
      {featuredProducts.map((e, index) => (
        <ItemCard item={e} index={index} className={'btn-add-to-cart'} onClick={handleAddToCart} />
      ))}
    </>
  );
};

export default ProductList;
