import { ProductInfo } from '../ProductInfo';
import { ProductItem } from '../ProductItem';

export interface Props {
  amountProduct: number;
}

export const ProductCart: React.FC<Props> = ({ amountProduct }) => (
  <div className='cart-content'>
    <div className='header-content'>
      <p className='title'>Your Cart</p>
      <p className='amount'>({amountProduct})</p>
    </div>
    <ProductItem />
    <ProductInfo />
  </div>
);
