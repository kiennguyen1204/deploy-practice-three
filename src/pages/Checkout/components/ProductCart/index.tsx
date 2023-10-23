// components
import { ProductInfo } from '../ProductInfo';
import { ProductItem } from '../ProductItem';

// styles
import './index.css';

export interface Props {
  amountProduct: number;
}

export const ProductCart: React.FC<Props> = ({ amountProduct }) => (
  <div className='flex-column cart-content'>
    <div className='flex-space-between-container header-content'>
      <h1 className='title'>Your Cart</h1>
      <p className='flex-container amount-product'>({amountProduct})</p>
    </div>
    <ProductItem />
    <ProductInfo />
  </div>
);
