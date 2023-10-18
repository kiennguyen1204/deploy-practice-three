// assets
import MasterCard from 'assets/images/master_card.svg';
import Visa from 'assets/images/visa.svg';
import Bitcoin from 'assets/images/bitcoin.svg';
import Interact from 'assets/images/interac.svg';

// styles
import './index.css';

export const Payments: React.FC = (): JSX.Element => (
  <section className='payments'>
    <h1 className='title-payments'>SECURE PAYMENTS PROVIDED BY</h1>
    <div className='list-payments'>
      <div className='item-payment'>
        <img src={MasterCard} alt='MasterCard' />
      </div>
      <div className='item-payment'>
        <img src={Visa} alt='Visa' />
      </div>
      <div className='item-payment'>
        <img src={Bitcoin} alt='Bitcoin' />
      </div>
      <div className='item-payment'>
        <img src={Interact} alt='Interact' />
      </div>
    </div>
  </section>
);
