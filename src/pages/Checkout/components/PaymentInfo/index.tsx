// mocks
import { DATA_CART } from 'mocks/mockData';

// pages
import { Payments } from 'pages/Checkout/components/Payments';

// styles
import './index.css';

export const PaymentInfo: React.FC = (): JSX.Element => (
  <div className='flex-column payments-container'>
    <div className='flex-column price-group'>
      <div className='flex-space-between-container price-box'>
        <h3 className='box-title'>Subtotal</h3>
        <div className='price'>${DATA_CART.total}</div>
      </div>
      <div className='price-box'>
        <h3 className='box-title'>Discount</h3>
        <div className='price'>${DATA_CART.discount}</div>
      </div>
      <div className='price-box'>
        <h3 className='box-title'>Shipping Costs</h3>
        <div className='price'>${DATA_CART.shipping}</div>
      </div>
    </div>
    <div className='flex-space-between-container coupon-group'>
      <input className='coupon-input' placeholder='Coupon Code' />

      <button className='flex-container btn coupon-btn'>Apply Coupon</button>
    </div>
    <div className='flex-column free-ship'>
      <div className='flex-column progress-bar'>
        <div className='progress'></div>
      </div>
      <div className='flex-column text-group'>
        <p>
          Get Free
          <span> Shipping </span>
          for orders over
          <span className='costs'> $100</span>
        </p>
        <a>Continue Shopping</a>
      </div>
    </div>
    <button className='flex-container btn checkout-btn'>
      <p>Checkout</p>
      <div className='divider'></div>
      <p>${DATA_CART.payTotal}</p>
    </button>
    <div className='divider'></div>
    <Payments />
  </div>
);
