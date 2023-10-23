import { useCallback, useContext, useEffect, useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// interfaces
import { Product } from 'interfaces/item';

// assets
import PrevArrow from 'assets/images/arrow_left.svg';
import NextArrow from 'assets/images/arrow_right.svg';
import ArrowDown from 'assets/images/dropdown_chevron.svg';

// utils
import { handleAddToCartWithToast } from 'utils/cart';

// hooks
import { useToast } from 'hooks/useToast';

// context
import { ProductContext } from 'contexts/ProductsProvider';

// layouts
import { FirstServicePattern } from 'layouts/ServiceOne';

// components
import ItemCard from 'components/common/Item';
import { Filter } from './Filter';
import { BannerCategory } from './BannerCategory';
import ProductList from 'components/common/ListProduct';
import Toast from 'components/common/Toast';

// styles
import './index.css';

interface Props {
  searchValue: string;
}

export const CategoryProduct: React.FC<Props> = ({ searchValue }): JSX.Element => {
  const { products } = useContext(ProductContext);
  const { toast, showToast, hideToast } = useToast();
  const { cart, onAddToCart } = useContext(ProductContext);

  const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc' | null>(null);

  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchValue) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(products);
    }
  }, [searchValue, products]);

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

  const handleAddToCart = useCallback(
    async (productToAdd: Product): Promise<void> => {
      await handleAddToCartWithToast(productToAdd, cart, onAddToCart, showToast);
    },
    [cart, onAddToCart, showToast]
  );

  const handleClose = (): void => {
    hideToast();
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortBy = (criteria: 'price_asc' | 'price_desc') => {
    setSortBy(criteria);
    setIsDropdownOpen(false);

    if (criteria === 'price_asc') {
      const sortedResults = searchResults.slice().sort((a, b) => a.price - b.price);
      setSearchResults(sortedResults);
    } else if (criteria === 'price_desc') {
      const sortedResults = searchResults.slice().sort((a, b) => b.price - a.price);
      setSearchResults(sortedResults);
    }
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
            <span role='button' className='flex-container filter-title' onClick={toggleDropdown}>
              Short By Lates
              <img src={ArrowDown} alt='arrow-down' />
              {isDropdownOpen && (
                <div className='dropdown-content'>
                  <p onClick={() => handleSortBy('price_asc')}> Price Ascending </p>
                  <p onClick={() => handleSortBy('price_desc')}> Price Descending </p>
                </div>
              )}
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
                    {searchResults.slice(0, 4).map((el, index) => (
                      <SplideSlide key={index}>
                        <ItemCard item={el} className={'card-item'} onAddToCart={handleAddToCart} />
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
              <ProductList products={searchValue ? searchResults : products} />
            </section>

            <BannerCategory />

            <section className='list-item-data'>
              <ProductList products={searchValue ? searchResults : products} />
            </section>
          </div>
        </section>
      </div>
      {toast.openPopup && (
        <Toast status={toast.status} message={toast.message} onClose={handleClose} />
      )}
    </article>
  );
};
