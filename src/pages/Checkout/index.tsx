import { useContext, useState } from 'react';

// assets
import CartSvg from 'assets/images/checkout/cart.svg';
import CheckoutSvg from 'assets/images/checkout/checkout.svg';
import OrderSvg from 'assets/images/checkout/order.svg';
import TickSvg from 'assets/images/checkout/tick.svg';

// contexts
import { ProductContext } from 'contexts/ProductsProvider';

// constants
import { STEPS_CART } from 'constants/enums';

// components
import { ProductCart } from './components/ProductCart';
import { PaymentInfo } from './components/PaymentInfo';

// styles
import './index.css';

export const Checkout: React.FC = (): JSX.Element => {
  const [currentStep] = useState<number>(0);
  const { cart } = useContext(ProductContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const steps = [
    {
      title: 'Shopping Cart',
      icon: <img src={CartSvg} alt='Shopping Cart' />,
      id: STEPS_CART.SHOPPING_CART
    },
    {
      title: 'Checkout',
      icon: <img src={CheckoutSvg} alt='Checkout' />,
      id: STEPS_CART.CHECKOUT
    },
    {
      title: 'Order Complete ',
      icon: <img src={OrderSvg} alt='Order Complete' />,
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
              {index < currentStep ? <img src={TickSvg} alt='Tick' /> : element.icon}
            </div>
            <p className='step-title'>{element.title}</p>
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
