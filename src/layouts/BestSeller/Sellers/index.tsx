import { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';

// hooks
import { useToast } from 'hooks/useToast';

// context
import { ProductContext } from 'contexts/ProductsProvider';

// assets
import BestProduct from 'assets/images/products/best_sell.png';

// constants
import { DECODING_TYPES, LOADING_TYPES } from 'constants/enums';

// components
import Toast from 'components/common/Toast';
import Image from 'components/common/Image';
import ProductList from 'components/common/ListProduct';
import LoadingSpinner from 'components/common/Loading';

// styles
import './index.css';

export const Sellers: React.FC = (): JSX.Element => {
  const { products } = useContext(ProductContext);
  const { toast, hideToast } = useToast();

  return (
    <article className='seller-list-container'>
      <section className='flex-row seller-list-container-box'>
        <div className='list-container best-seller-card'>
          <picture className='best-seller-card-image'>
            <Image
              decoding={DECODING_TYPES.Async}
              loading={LOADING_TYPES.Lazy}
              src={BestProduct}
              className='best-product-image'
              alt='best-product'
            />
          </picture>

          <div className='flex-container seller-card-content'>
            <header className='best-seller-card-title'>
              <h3>Shop our Best Sellers</h3>
            </header>

            <div className='best-seller-card-description'>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit
                lectus magnis feugiat.
              </p>

              <div className='best-seller-card-button'>
                <Link to='/category' className='base-seller-link'>
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className='list-container seller-list'>
          <Suspense fallback={<LoadingSpinner />}>
            <ProductList products={products} />
          </Suspense>
        </section>

        {toast.openPopup && (
          <Toast status={toast.status} message={toast.message} onClose={hideToast} />
        )}
      </section>
    </article>
  );
};
