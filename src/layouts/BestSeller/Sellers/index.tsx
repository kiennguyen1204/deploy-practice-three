import { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// context
import { ProductContext } from 'contexts/ProductsProvider';

// assets
import BestProduct from 'assets/images/products/best_sell.png';
import PrevArrow from 'assets/images/arrow_left.svg';
import NextArrow from 'assets/images/arrow_right.svg';

// interfaces
import { Product } from 'interfaces/item';

// components
import ItemCard from 'components/common/Item';
import Toast from 'components/common/Toast';

// styles
import './index.css';
import { handleAddToCartWithToast } from 'utils/cart';
import { useToast } from 'hooks/useToast';

export const Sellers: React.FC = (): JSX.Element => {
  const { products, cart, onAddToCart } = useContext(ProductContext);
  const { toast, showToast, hideToast } = useToast();

  const splideOpts = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '32px',
    padding: '15%',

    pagination: false,
    breakpoints: {
      575: {
        perPage: 1,
        gap: '24px'
      },
      767: { perPage: 2 },
      991: { perPage: 3 },
      1100: { perPage: 1.5 },
      1200: { perPage: 2.5 },
      1920: { perPage: 2.65, padding: 0 }
    }
  };

  const handleAddToCart = useCallback(
    async (productToAdd: Product): Promise<void> => {
      await handleAddToCartWithToast(productToAdd, cart, onAddToCart, showToast);
    },
    [cart, onAddToCart, showToast]
  );

  const handleClose = (): void => {
    hideToast();
  };

  return (
    <article className='seller-list-container'>
      <section className='flex-row seller-list-container-box'>
        <div className='list-container best-seller-card'>
          <picture className='best-seller-card-image'>
            <img
              decoding='async'
              loading='lazy'
              src={BestProduct}
              className='best-product-image'
              alt='best-product'
            />
          </picture>

          <div className='flex-container seller-card-content'>
            <header className='best-seller-cardTitle'>
              <h2>Shop our Best Sellers</h2>
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

        <div className='seller-list'>
          <Splide hasTrack={false} options={splideOpts} aria-label='My Favorite Images'>
            <SplideTrack>
              {products.map((el, index) => (
                <SplideSlide key={index}>
                  <ItemCard
                    item={el}
                    key={index}
                    className={'custom-card'}
                    onAddToCart={handleAddToCart}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className='splide__arrows'>
              <button className='splide__arrow splide__arrow--prev'>
                <img src={PrevArrow} alt='Arrow Prev' />
              </button>

              <button className='splide__arrow splide__arrow--next'>
                <img src={NextArrow} alt='Arrow Next' />
              </button>
            </div>
          </Splide>
        </div>
        {toast.openPopup && (
          <Toast status={toast.status} message={toast.message} onClose={handleClose} />
        )}
      </section>
    </article>
  );
};
