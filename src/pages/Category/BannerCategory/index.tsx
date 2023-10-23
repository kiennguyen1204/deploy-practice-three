// assets

import PrevArrow from 'assets/images/arrow_left.svg';
import NextArrow from 'assets/images/arrow_right.svg';

// constants
import { BUTTON_SIZE, BUTTON_VARIANT } from 'constants/enums';

// components
import Button from 'components/common/Button';
import { RatingAndReview } from '../RatingAndReview';

// styles
import './index.css';

export const BannerCategory: React.FC = (): JSX.Element => {
  const handleAddToCart = () => {
    // TODO: Handle add to cart
  };

  return (
    <div className='banner'>
      <article className='banner-bottom relative'>
        <div className='blur'></div>
        <div className='banner-item-wrapper'>
          <section className='flex-column wrapper-left'>
            <p className='cate'>CONCENTRATES</p>
            <h1 className='title'>Mix And Match Shatter/Budder 28g (4 X 7G)</h1>
            <RatingAndReview />
            <div className='align-center volumes'>
              <span className='flex-container'>28g</span>
              <span className='flex-container'>1/2lb</span>
              <span className='flex-container'>1/4lb</span>
            </div>

            <div className='flex-space-between-container button-n-price'>
              <Button
                label='Add to cart'
                variant={BUTTON_VARIANT.PRIMARY}
                size={BUTTON_SIZE.SMALL}
                onClick={handleAddToCart}
                className='btn btn-add-cart-custom'
              />

              <p className='price'>
                <span>$102.00</span>
                <span>$200.00</span>
              </p>
            </div>
          </section>
          <section className='wrapper-right'>
            <div className='background-blur-item relative'>
              <div className='splide__arrows'>
                <button className='splide__arrow splide__arrow--prev'>
                  <img src={PrevArrow} alt='Previous' />
                </button>
                <button className='splide__arrow splide__arrow--next'>
                  <img src={NextArrow} alt='Next' />
                </button>
              </div>
              <img src='/src/assets/images/category/product_category.webp' alt='banner-category' />
            </div>
            <div className='flex-container dots'>
              {Array.from({ length: 4 }, (_, index) => (
                <span key={index} className={`dot ${index === 0 && 'active'} `} />
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};
