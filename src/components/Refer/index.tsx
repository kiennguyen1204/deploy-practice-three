// styles
import './index.css';

// constants
import { BUTTON_VARIANT } from 'constants/enums';

// assets
import ReferFriendSVG from 'assets/images/refer/refer_friends.svg';
import Background from 'assets/images/refer/bg_mobile.svg';

// components
import Button from 'components/common/Button';
import ContentBottom from './ContentBottom';
import Image from 'components/common/Image';

const ReferFriend: React.FC = (): JSX.Element => {
  const handleOnclick = () => {
    // TODO: handle onclick
  };

  return (
    <article className='refer-box-container'>
      <section className='card-box-container'>
        <div className='card-box'>
          <div className='card-box-element'>
            <picture className='svg'>
              <Image src={Background} alt='refer' className='bg-mobile' />
              <Image src={ReferFriendSVG} alt='refer' className='bg-desktop' />
            </picture>
            <div className='wrapper-container card-wrapper'>
              <h2 className='refer-title'>REFER A FRIEND</h2>
              <p className='get'>
                And get <span className='percent'>$30!</span>
              </p>
              <Button
                variant={BUTTON_VARIANT.PRIMARY}
                onClick={handleOnclick}
                label='Refer Here'
                className='btn btn-action custom-button'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='content-full-card'>
        <h3 className='title-bottom'>
          HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
        </h3>
        <p className='item-content-description'>
          Ordering weed online from Top Shelf BC is easy. We are proud to have made the process
          accessible across multiple platforms and simple to understand, meaning that more people
          can come to us to buy their cannabis products online.
        </p>

        <ContentBottom />
      </section>
    </article>
  );
};

export default ReferFriend;
