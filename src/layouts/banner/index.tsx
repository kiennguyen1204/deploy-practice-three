// constants
import { BUTTON_SIZE, BUTTON_VARIANT } from 'constants/enums';

// components
import Button from 'components/common/Button';

// styles
import './index.css';

const BannerPattern: React.FC = (): JSX.Element => {
  const handleOnClick = () => {
    // TODO: handle onclick
  };

  return (
    <div className='banner-container'>
      <div className='banner-box-background'></div>

      <div className='banner-box-container'>
        <div className='banner-box'>
          <div className='.wrapper-container banner-box-content'>
            <div className='banner-box-title'>
              <h4 className='banner-subtitle'>BEST SELLER</h4>
              <h2 className='banner-title'>BEST DISPENSARY TO BUY WEED ONLINE </h2>
            </div>
            <div className='banner-box-description'>
              <p className='banner-description'>Vitamins & Supplements</p>
            </div>
          </div>

          <div className='banner-box-service'>
            <ul className='banner-box-service-group list-unstyled'>
              <li className='service-item'>
                <span className='text'>Get 25% off</span>
              </li>
              <div className='divider-line'></div>
              <li className='service-item'>
                <span className='text'>Free Shipping</span>
              </li>
            </ul>

            <div className='banner-box-service-button'>
              <Button
                size={BUTTON_SIZE.EXTRA_LARGE}
                label='Shop All'
                variant={BUTTON_VARIANT.PRIMARY}
                className='banner-button'
                onClick={handleOnClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPattern;
