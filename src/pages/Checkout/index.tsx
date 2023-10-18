import { useState } from 'react';
import CartSvg from 'assets/images/checkout/cart.svg';
import CheckoutSvg from 'assets/images/checkout/checkout.svg';
import OrderSvg from 'assets/images/checkout/order.svg';
import TickSvg from 'assets/images/checkout/tick.svg';

import { STEPS_CART } from 'constants/enums';
import './index.css';
import { dataCart } from 'mocks/mockData';
import { Payments } from 'pages/Checkout/Payments';

import { ProductCart } from './ProductCart';

export default function Checkout() {
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

  const [currentStep, setCurrentStep] = useState(0);
  const [amountProduct] = useState(4);

  const [step, setStep] = useState(steps[0]);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        {steps.map((e, i) => (
          <div
            className='step-item pe-auto'
            key={i}
            onClick={() => {
              setStep(e);
              setCurrentStep(i);
            }}>
            <div
              className={`step-icon ${i === currentStep ? 'active' : ''} ${
                i < currentStep ? 'complete' : ''
              }`}>
              {i < currentStep ? <img src={TickSvg} alt='Tick' /> : e.icon}
            </div>
            <p className='step-title'>{e.title}</p>
            {i < steps.length - 1 && <div className='step-divider'></div>}
          </div>
        ))}
      </div>
      <div className='checkout-content'>
        {step.id === STEPS_CART.SHOPPING_CART && <ProductCart amountProduct={amountProduct} />}

        <div className='payments-container'>
          <div className='price-group'>
            <div className='price-box'>
              <p className='title'>Subtotal</p>
              <div className='price'>${dataCart.total}</div>
            </div>
            <div className='price-box'>
              <p className='title'>Discount</p>
              <div className='price'>${dataCart.discount}</div>
            </div>
            <div className='price-box'>
              <p className='title'>Shipping Costs</p>
              <div className='price'>${dataCart.shipping}</div>
            </div>
          </div>
          <div className='coupon-group'>
            <div className='coupon-input'>
              <input placeholder='Coupon Code' />
            </div>
            <button className='btn coupon-btn'>Apply Coupon</button>
          </div>
          <div className='free-ship'>
            <div className='progress-bar'>
              <div className='progress'></div>
            </div>
            <div className='text-group'>
              <p>
                Get Free
                <span> Shipping </span>
                for orders over
                <span className='costs'> $100</span>
              </p>
              <a>Continue Shopping</a>
            </div>
          </div>
          <button className='btn checkout-btn'>
            <p>Checkout</p>
            <div className='divider'></div>
            <p>${dataCart.payTotal}</p>
          </button>
          <div className='divider'></div>
          <Payments />
        </div>
      </div>
    </div>
  );
}
