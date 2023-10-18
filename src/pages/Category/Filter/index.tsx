// styles
import './index.css';

// components
import { ProductCategoryList } from '../ProductCategoryList';

export const Filter: React.FC = (): JSX.Element => (
  <article className='left-filter-container'>
    <h2 className='title-filter'>Filters</h2>
    <section className='list-cate-item'>
      <h3 className='cate-title'>PRODUCT CATEGORY</h3>
      <ProductCategoryList />
    </section>

    <section className='button-clear'>
      <button className='align-center btn clear-all-filter btn-action'>Clear Filters</button>
    </section>
  </article>
);
