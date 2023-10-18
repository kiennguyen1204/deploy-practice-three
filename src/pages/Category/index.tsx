import { useEffect, useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// services
import { getProducts } from 'services/api-action';

// interfaces
import { Product } from 'interfaces/item';

// assets
import PrevArrow from 'assets/images/arrow_left.svg';
import NextArrow from 'assets/images/arrow_right.svg';
import ArrowDown from 'assets/images/dropdown_chevron.svg';

// layouts
import { FirstServicePattern } from 'layouts/ServiceOne';

// components
import ItemCard from 'components/common/Item';
import { Filter } from './Filter';
import { BannerCategory } from './BannerCategory';
import ProductList from 'components/common/ListProduct';

// styles
import './index.css';

export const CategoryProduct: React.FC = (): JSX.Element => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const productsData = await getProducts();
      setFeaturedProducts(productsData);
    };

    fetchFeaturedProducts();
  }, []);

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
      1100: { perPage: 3 },
      1400: { perPage: 3 },
      1920: {
        perPage: 4,
        padding: 0
      }
    }
  };

  const handleAddToCart = () => {
    // TODO: handle add to cart
  };

  return (
    <article className='category-product-container'>
      <FirstServicePattern />
      <header className='flex-space-between-container top-title-wrapper'>
        <h1 className='first-title'>Shop</h1>
        <div className='align-center flex-title'>
          <h3 className='two-title title-filter'>Filter</h3>
          <h4 className='three-title title-filter'>Short By Lates</h4>
        </div>
      </header>

      <div className='two-row-container'>
        <Filter />
        <section className='content-cate-product'>
          <header className='title-shop'>
            <span role='heading' className='shop-title'>
              Shop
            </span>
            <span role='button' className='flex-container filter-title'>
              Short By Lates
              <img src={ArrowDown} alt='arrow-down' />
            </span>
          </header>

          <h5 className='title'>Cannabis</h5>

          <p className='description'>
            Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and
            Sativa medical cannabis strain selections at the best prices online. You can be assured
            that all our strains go through a strict screening process to ensure that all your
            cannabis needs are top-quality. All of our flowers are sourced from reputable growers,
            based in British Columbia, Canada. We have hige grade selection comes from growers that
            produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis
            industry. You are guaranteed to be receiving high-quality flowers at the best prices
            online with our unbeatable sales!
          </p>

          <div className='main-content'>
            <div className='list-item-selling list-data'>
              <h6 className='title-top-selling'>Top Selling</h6>
              <div className='splide-list'>
                <Splide hasTrack={false} options={splideOpts} aria-label='My Favorite Images'>
                  <SplideTrack>
                    {featuredProducts.slice(0, 3).map((el, index) => (
                      <SplideSlide key={index}>
                        <ItemCard
                          item={el}
                          index={index}
                          className={'card-item'}
                          onClick={handleAddToCart}
                        />
                      </SplideSlide>
                    ))}
                  </SplideTrack>

                  <div className='splide__arrows'>
                    <button className='splide__arrow splide__arrow--prev'>
                      <img src={PrevArrow} alt='prev arrow' />
                    </button>
                    <button className='splide__arrow splide__arrow--next'>
                      <img src={NextArrow} alt='next-arrow' />
                    </button>
                  </div>
                </Splide>
              </div>
            </div>

            <section className='list-item-data list-first'>
              <ProductList />
            </section>

            <BannerCategory />

            <section className='list-item-data'>
              <ProductList />
            </section>
          </div>
        </section>
      </div>
    </article>
  );
};
