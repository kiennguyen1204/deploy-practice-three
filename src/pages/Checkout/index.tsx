import { useContext, useState } from 'react';

// assets
import CartSvg from 'assets/images/checkout/cart.svg';
import CheckoutSvg from 'assets/images/checkout/checkout.svg';
import OrderSvg from 'assets/images/checkout/order.svg';
import TickSvg from 'assets/images/checkout/tick.svg';

// contexts
import { CartContext } from 'contexts/CartProvider';
// constants
import { STEPS_CART } from 'constants/enums';

// components
import { ProductCart } from './components/ProductCart';
import { PaymentInfo } from './components/PaymentInfo';
import Image from 'components/common/Image';

// styles
import './index.css';

const Checkout: React.FC = (): JSX.Element => {
  const [currentStep] = useState<number>(0);
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const steps = [
    {
      title: 'Shopping Cart',
      icon: <Image src={CartSvg} alt='Shopping Cart' />,
      id: STEPS_CART.SHOPPING_CART
    },
    {
      title: 'Checkout',
      icon: <Image src={CheckoutSvg} alt='Checkout' />,
      id: STEPS_CART.CHECKOUT
    },
    {
      title: 'Order Complete ',
      icon: <Image src={OrderSvg} alt='Order Complete' />,
      id: STEPS_CART.ORDER_COMPLETE
    }
  ];

  const [step] = useState(steps[0]);

  return (
    <div className='flex-column checkout-container'>
      <div className='flex-container checkout-header'>
        {steps.map((element, index) => (
          <div className='align-center step-item pe-auto' key={index}>
            <div
              className={`flex-container step-icon ${index === currentStep && 'active'} ${
                index < currentStep && 'complete'
              }`}>
              {index < currentStep ? <Image src={TickSvg} alt='Tick' /> : element.icon}
            </div>
            <h2 className='step-title'>{element.title}</h2>
            {index < steps.length - 1 && <div className='step-divider'></div>}
          </div>
        ))}
      </div>

      <div className='flex-column checkout-content'>
        {step.id === STEPS_CART.SHOPPING_CART && <ProductCart amountProduct={totalQuantity} />}
        <PaymentInfo />
      </div>
    </div>
  );
};

export default Checkout;
