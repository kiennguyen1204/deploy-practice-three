// components
import ServiceList from './ServiceList';

// assets
import TruckFast from 'assets/images/service/truck_fast.svg';
import SafeHome from 'assets/images/service/safe_home.svg';
import Money from 'assets/images/service/money.svg';

// components
import Image from 'components/common/Image';

// styles
import './index.css';

export const FirstServicePattern: React.FC = (): JSX.Element => {
  const serviceList = [
    {
      title: 'Reliable Shipping',
      description:
        'Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!',
      icon: <Image src={TruckFast} alt='TruckFast' />
    },
    {
      title: 'You’re Safe With Us',
      description:
        'Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.',
      icon: <Image src={SafeHome} alt='SafeHome' />
    },
    {
      title: 'Best Quality & Pricing',
      description:
        'Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely',
      icon: <Image src={Money} alt='Money' />
    }
  ];

  return (
    <ServiceList classes='service-list-container' direction='row'>
      {serviceList.map(({ icon, title, description }, index) => (
        <div className='service-list-container-box' key={index}>
          <div className='service-list-box-left'>
            <div className='flex-container icon-box'>{icon}</div>
          </div>
          <div className='wrapper-container service-list-box-right'>
            <h1 className='service-list-title'>{title}</h1>
            <p className='service-list-description'>{description}</p>
          </div>
        </div>
      ))}
    </ServiceList>
  );
};
