// assets
import Order from 'assets/images/checkout/transaction_minus.svg';
import BoxTime from 'assets/images/checkout/box_time.svg';

// components
import { DeliverySection } from './DeliverySection';

// styles
import './index.css';

export const ProductInfo: React.FC = (): JSX.Element => (
  <article className='flex-column delivery-container'>
    <DeliverySection
      title='Delivery'
      imgSrc={Order}
      imgAlt='Order'
      boldText='Order by 10pm for free next day delivery on Orders overs $100'
      regularText='We deliver Monday to Saturday - excluding Holidays'
    />
    <DeliverySection
      title='Discount'
      imgSrc={BoxTime}
      imgAlt='Box Time'
      boldText='Free next day delivery to stores.'
      regularText='Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100'
    />
    <DeliverySection
      title='Free Returns'
      imgSrc={Order}
      imgAlt='Order'
      regularText='30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE'
    />
  </article>
);
