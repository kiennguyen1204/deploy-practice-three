import { Link } from 'react-router-dom';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// assets
import BestProduct from 'assets/images/products/best_sell.png';
import PrevArrow from 'assets/images/arrow-left.svg';
import NextArrow from 'assets/images/arrow-right.svg';

// mocks
import { DATA_LIST } from 'mocks/dataList';

// components
import ItemCard from 'components/common/item';

// styles
import './index.css';

export const Sellers: React.FC = (): JSX.Element => {
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

  const handleOnclick = (): void => {
    //TODO: handle function onclick
  };

  return (
    <div className='seller-list-container'>
      <div className='seller-list-container-box'>
        <div className='best-seller-card'>
          <div className='best-seller-card-image'>
            <img
              decoding='async'
              loading='lazy'
              src={BestProduct}
              className='best-product-image'
              alt='best-product'
            />
          </div>

          <div className='flex-container seller-card-content'>
            <div className='best-seller-cardTitle'>
              <h3>Shop our Best Sellers</h3>
            </div>

            <div className='best-seller-card-description'>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit
                lectus magnis feugiat.
              </p>

              <div className='best-seller-card-button'>
                <Link to='/' className='base-seller-link'>
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='seller-list'>
          <Splide hasTrack={false} options={splideOpts} aria-label='My Favorite Images'>
            <SplideTrack>
              {DATA_LIST.map((el, index) => (
                <SplideSlide key={index}>
                  <ItemCard
                    className='custom-card'
                    item={el}
                    index={index}
                    onClick={handleOnclick}
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
      </div>
    </div>
  );
};
