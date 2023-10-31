import { Suspense, useContext, useEffect, useState } from 'react';

import '@splidejs/react-splide/css';

// interfaces
import { Product } from 'interfaces/item';

// constants
import { SORT_TYPE } from 'constants/enums';

// assets

import ArrowDown from 'assets/images/dropdown_chevron.svg';

// hooks
import { useToast } from 'hooks/useToast';

// context
import { ProductContext } from 'contexts/ProductsProvider';

// layouts
import { FirstServicePattern } from 'layouts/ServiceOne';

// components
import { Filter } from './Filter';
import { BannerCategory } from './BannerCategory';
import ProductList from 'components/common/ListProduct';
import Toast from 'components/common/Toast';
import Image from 'components/common/Image';
import LoadingSpinner from 'components/common/Loading';

// styles
import './index.css';

interface Props {
  searchValue: string;
}

const CategoryProduct: React.FC<Props> = ({ searchValue }): JSX.Element => {
  const { products } = useContext(ProductContext);
  const { toast, hideToast } = useToast();

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortBy = (criteria: SORT_TYPE.ASC | SORT_TYPE.DESC) => {
    setSortBy(criteria);
    setIsDropdownOpen(false);

    if (criteria === SORT_TYPE.ASC) {
      const sortedResults = searchResults.slice().sort((a, b) => a.price - b.price);
      setSearchResults(sortedResults);
    } else if (criteria === SORT_TYPE.DESC) {
      const sortedResults = searchResults.slice().sort((a, b) => b.price - a.price);
      setSearchResults(sortedResults);
    }
  };

  const handleSearchByName = (name: string) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  return (
    <article className='category-product-container'>
      <FirstServicePattern />
      <header className='flex-space-between-container top-title-wrapper'>
        <h1 className='first-title'>Shop</h1>
        <div className='align-center flex-title'>
          <h2 className='two-title title-filter'>Filter</h2>
          <h2 className='three-title title-filter'>Short By Lates</h2>
        </div>
      </header>

      <div className='two-row-container'>
        <Filter onSearchByName={handleSearchByName} />
        <section className='content-cate-product'>
          <header className='title-shop'>
            <span role='heading' className='shop-title'>
              Shop
            </span>
            <span role='button' className='flex-container filter-title' onClick={toggleDropdown}>
              Short By Lates
              <Image src={ArrowDown} alt='arrow-down' />
              {isDropdownOpen && (
                <div className='dropdown-content'>
                  <p onClick={() => handleSortBy(SORT_TYPE.ASC)}> Price Ascending </p>
                  <p onClick={() => handleSortBy(SORT_TYPE.DESC)}> Price Descending </p>
                </div>
              )}
            </span>
          </header>

          <h3 className='product-title'>Cannabis</h3>

          <p className='product-description'>
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
            <div className='list-item-selling'>
              <h2 className='title-top-selling'>Top Selling</h2>
              <section className='list-item-data'>
                <Suspense fallback={<LoadingSpinner />}>
                  <ProductList products={searchValue ? searchResults : products} />
                </Suspense>
              </section>
            </div>

            <section className='list-item-data list-first'>
              <Suspense fallback={<LoadingSpinner />}>
                <ProductList products={searchValue ? searchResults : products} />
              </Suspense>
            </section>

            <BannerCategory />

            <section className='list-item-data'>
              <Suspense fallback={<LoadingSpinner />}>
                <ProductList products={searchValue ? searchResults : products} />
              </Suspense>
            </section>
          </div>
        </section>
      </div>
      {toast.openPopup && (
        <Toast status={toast.status} message={toast.message} onClose={hideToast} />
      )}
    </article>
  );
};

export default CategoryProduct;
