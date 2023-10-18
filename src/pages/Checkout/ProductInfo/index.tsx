// assets
import Order from 'assets/images/checkout/transaction_minus.svg';
import BoxTime from 'assets/images/checkout/box_time.svg';

// styles
import './index.css';

export const ProductInfo: React.FC = (): JSX.Element => (
  <article className='flex-column delivery-container'>
    <section className='flex-column delivery-content'>
      <h2 className='title'>Delivery</h2>
      <div className='flex-column delivery-box'>
        <div className='flex-container deli-icon'>
          <img src={Order} alt='Order' />
        </div>
        <p className='deli-bold'>Order by 10pm for free next day delivery on Orders overs $100</p>
        <p className='deli-text'>We deliver Monday to Saturday - excluding Holidays</p>
      </div>
    </section>
    <section className='flex-column delivery-content'>
      <h2 className='title'></h2>
      <div className='delivery-box'>
        <div className='flex-container deli-icon'>
          <img src={BoxTime} alt='Box Time' />
        </div>
        <p className='deli-bold'>Free next day delivery to stores.</p>
        <p className='deli-text'>
          Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100
        </p>
      </div>
    </section>
    <section className='flex-column delivery-content'>
      <h2 className='title'>Free Returns</h2>
      <div className='delivery-box'>
        <div className='flex-container deli-icon'>
          <img src={Order} alt='Order' />
        </div>
        <p className='deli-text'>
          30 days to return it to us for a refund. We have made returns SO EASY - you can now return
          your order to a store or send it with FedEx FOR FREE
        </p>
      </div>
    </section>
  </article>
);
