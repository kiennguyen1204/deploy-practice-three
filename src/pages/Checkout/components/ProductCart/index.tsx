// components
import { Suspense } from 'react';
import { ProductInfo } from '../ProductInfo';
import { ProductItem } from '../ProductItem';
import LoadingSpinner from 'components/common/Loading';

// styles
import './index.css';

export interface Props {
  amountProduct: number;
}

export const ProductCart: React.FC<Props> = ({ amountProduct }) => (
  <div className='flex-column cart-content'>
    <div className='flex-space-between-container header-content'>
      <h2 className='cart-title'>Your Cart</h2>
      <p className='flex-container amount-product'>({amountProduct})</p>
    </div>

    <Suspense fallback={<LoadingSpinner />}>
      <ProductItem />
      <ProductInfo />
    </Suspense>
  </div>
);
