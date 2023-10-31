import { useState, useEffect, useContext, Suspense } from 'react';
import { useParams } from 'react-router-dom';

// context
import ProductProvider, { ProductContext } from 'contexts/ProductsProvider';

// assets
import Star from 'assets/images/star.svg';

// interfaces
import { Product } from 'interfaces/item';

// services
import { getProductById } from 'services/api-action';

// components
import ProductList from 'components/common/ListProduct';
import Image from 'components/common/Image';
import ThumbsList from './ThumbList';
import LoadingSpinner from 'components/common/Loading';

// styles
import './index.css';

const Detail: React.FC = (): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const { products } = useContext(ProductContext);

  useEffect(() => {
    const fetchProductById = async () => {
      if (productId) {
        const data = await getProductById(productId);
        setProduct(data || null);
      }
    };

    fetchProductById();
  }, [productId]);

  const {
    image,
    name,
    sale,
    discount,
    price,
    category,
    rate = 0,
    totalReviews,
    description
  } = product || {};

  return (
    <>
      <article className='detail-container'>
        <section className='list-container image-container'>
          <picture className='flex-container image-product'>
            <Image src={image} alt='main product' />
          </picture>

          <ThumbsList image={image} />
        </section>

        <div className='list-container info-container'>
          <div className='list-container overview-container'>
            <p className='category'>{category}</p>
            <h1 className='product-title-name'>{name}</h1>

            <p className='sale'>{sale}</p>

            <section className='numeral-container'>
              <div className='price-container'>
                <p className='discount'>${discount}</p>
                <p className='price'>${price}</p>
              </div>
              <div className='review-container'>
                <div className='rate-box'>
                  <picture className='rate-svg'>
                    <Image src={Star} alt='star' />
                  </picture>
                  <span className='rate-text'>{rate}</span>
                </div>
                <div className='divider'></div>
                <div className='review-box'>
                  <div className='review-text'>
                    {totalReviews} <span className='reviews'>Reviews</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className='list-container description-container'>
            <h2 className='detail-description'>description</h2>
            <p className='content'>{description}</p>
          </div>
        </div>
      </article>

      <section className='featured-product'>
        <h2 className='featured-title'>Featured Product</h2>
        <div className='container-list-item'>
          <ProductProvider>
            <Suspense fallback={<LoadingSpinner />}>
              <ProductList products={products} />
            </Suspense>
          </ProductProvider>
        </div>
      </section>
    </>
  );
};

export default Detail;
