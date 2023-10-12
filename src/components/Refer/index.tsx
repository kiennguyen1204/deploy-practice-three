// styles
import './index.css';

// constants
import { BUTTON_VARIANT } from 'constants/enums';

// assets
import ReferFriendSVG from 'assets/images/refer/refer_friends.svg';
import RegisterIcon from 'assets/images/refer/register.svg';
import ShopIcon from 'assets/images/refer/shop.svg';
import WalletIcon from 'assets/images/refer/wallet.svg';
import RelaxIcon from 'assets/images/refer/relax.svg';
import Background from 'assets/images/refer/bg_mobile.svg';

// components
import Button from 'components/common/Button';
import ReferFriendItem from './DataBottom';

const ReferFriend: React.FC = (): JSX.Element => {
  const dataBottom = [
    {
      title: 'REGISTER',
      icon: <img src={RegisterIcon} alt='refer' />,
      description: `Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.`
    },
    {
      title: 'SHOP',
      icon: <img src={ShopIcon} alt='refer' />,
      description: `Decide on what you want to purchase. We stock a wide range of edibles,flowers, concentrates and mushrooms there is bound to be something for everyone.`
    },
    {
      title: 'MAKE PAYMENT',
      icon: <img src={WalletIcon} alt='refer' />,
      description: `Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.`
    },
    {
      title: 'RELAX',
      icon: <img src={RelaxIcon} alt='refer' />,
      description: `Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.`
    }
  ];

  const handleOnclick = () => {
    // TODO: handle onclick
  };

  return (
    <article className='refer-box-container'>
      <section className='card-box-container'>
        <div className='card-box'>
          <div className='card-box-element'>
            <picture className='svg'>
              <img src={Background} alt='refer' className='bg-mobile' />
              <img src={ReferFriendSVG} alt='refer' className='bg-desktop' />
            </picture>
            <div className='wrapper-container card-wrapper'>
              <h1 className='title'>REFER A FRIEND</h1>
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
        <h2 className='title-bottom'>
          HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
        </h2>
        <p className='description'>
          Ordering weed online from Top Shelf BC is easy. We are proud to have made the process
          accessible across multiple platforms and simple to understand, meaning that more people
          can come to us to buy their cannabis products online.
        </p>

        <div className='content-bottom'>
          <div className='list-content'>
            {dataBottom.map((el, index) => (
              <ReferFriendItem
                index={index}
                icon={el.icon}
                title={el.title}
                description={el.description}
              />
            ))}
          </div>

          <Button
            variant={BUTTON_VARIANT.PRIMARY}
            onClick={handleOnclick}
            label='Choose your Weed'
            className='btn btn-action flex-container custom-button'
          />
        </div>
      </section>
    </article>
  );
};

export default ReferFriend;
