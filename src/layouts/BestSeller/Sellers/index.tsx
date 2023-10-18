import { Link } from 'react-router-dom';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// assets
import BestProduct from 'assets/images/products/best_sell.png';
import PrevArrow from 'assets/images/arrow_left.svg';
import NextArrow from 'assets/images/arrow_right.svg';

// mocks
import { DATA_LIST } from 'mocks/dataList';

// components
import ItemCard from 'components/common/Item';

// styles
import './index.css';
import { Item } from '../../../interfaces/item';
import { useEffect, useState } from 'react';
import { getProducts } from '../../../services/api-action';

export const Sellers: React.FC = (): JSX.Element => {
  const [featuredProducts, setFeaturedProducts] = useState<Item[]>([]);

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

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const productsData = await getProducts();
      setFeaturedProducts(productsData);
    };

    fetchFeaturedProducts();
  }, []);

  const handleOnclick = (): void => {
    //TODO: handle function onclick
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
              {featuredProducts.map((el, index) => (
                <SplideSlide key={index}>
                  <ItemCard
                    item={el}
                    key={index}
                    index={0}
                    className={'custom-card'}
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
      </section>
    </article>
  );
};
