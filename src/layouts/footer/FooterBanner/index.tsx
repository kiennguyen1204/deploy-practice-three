// constants
import { BUTTON_SIZE, BUTTON_VARIANT, INPUT_SIZE, INPUT_TYPE } from 'constants/enums';

// components
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import Card from 'components/common/Card/index';

// styles
import './index.css';

export const FooterBanner: React.FC = (): JSX.Element => {
  const handleClick = () => {
    //TODO: handle function onClick
  };

  return (
    <Card classes={'banner-container'}>
      <div className='wrapper-container card-wrapper'>
        <div className='wrapper-container banner-text '>
          <h3 className='banner-title'>UNLOCK 20% OFF YOUR FIRST ORDER</h3>
          <p className='banner-description'>
            Get 20% off your first purchase when you sign up for our newsletter.
          </p>
        </div>

        <hr className='spacing-line' />

        <div className='banner-footer-flex'>
          <Input
            type={INPUT_TYPE.TEXT}
            size={INPUT_SIZE.MEDIUM}
            className='banner-input'
            placeholder='Email Address'
          />

          <Button
            label='Reveal coupon'
            variant={BUTTON_VARIANT.PRIMARY}
            size={BUTTON_SIZE.LARGE}
            onClick={handleClick}
            className='banner-button'
          />
        </div>
      </div>
    </Card>
  );
};
