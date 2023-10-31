// assets
import MasterCard from 'assets/images/master_card.svg';
import Visa from 'assets/images/visa.svg';
import Bitcoin from 'assets/images/bitcoin.svg';
import Interact from 'assets/images/interac.svg';

// components
import Image from 'components/common/Image';

// styles
import './index.css';

export const Payments: React.FC = (): JSX.Element => (
  <section className='flex-column payments'>
    <h4 className='title-payments'>SECURE PAYMENTS PROVIDED BY</h4>
    <div className='list-payments'>
      <Image src={MasterCard} alt='MasterCard' className='item-payment' />

      <Image src={Visa} alt='Visa' className='item-payment' />

      <Image src={Bitcoin} alt='Bitcoin' className='item-payment' />

      <Image src={Interact} alt='Interact' className='item-payment' />
    </div>
  </section>
);
