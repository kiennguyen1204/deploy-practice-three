// assets
import Minus from 'assets/images/minus.svg';
import Add from 'assets/images/add.svg';

import { dataCart } from 'mocks/mockData';
import './index.css';

export const ProductItem: React.FC = () => (
  <section className='flex-column list-cart'>
    {dataCart.cart.map((element, index: number) => (
      <div className='item-cart' key={index}>
        <img src={element.image} className='flex-container item-image' />
        <div className='flex-column content-item'>
          <div className='flex-column product-box'>
            <h1 className='title'>{element.name}</h1>
            <div className='flex-space-between-container product-value'>
              <div className='align-center amount-price'>
                <div className='flex-container amount'>
                  <button className='flex-container amount-btn'>
                    <img src={Minus} alt='Minus' />
                  </button>

                  <p className='flex-container quantity'>{element.amount}</p>

                  <button className='amount-btn'>
                    <img src={Add} alt='Add' />
                  </button>
                </div>
                <p className='price'>${element.price}</p>
              </div>
              <p className='total'>${element.total}</p>
            </div>
          </div>

          {element.integra.map((pack, index: number) => (
            <div className='flex-column product-box' key={index}>
              <div className='title'>{pack.namePack}</div>
              <div className='flex-space-between-container product-value'>
                <div className='align-center amount-price'>
                  <div className='flex-container amount'>
                    <button className='flex-container amount-btn'>
                      <img src={Minus} alt='Minus' />
                    </button>

                    <p className='flex-container quantity'>{pack.amount}</p>

                    <button className='amount-btn'>
                      <img src={Add} alt='Add' />
                    </button>
                  </div>

                  <p className='price'>${pack.price}</p>
                </div>
                <p className='total'>${pack.total}</p>
              </div>
            </div>
          ))}

          <div className='flex-space-between-container subtotal'>
            <h4 className='sub-title'>Subtotal</h4>
            <p className='subtotal-price'>${element.subTotal}</p>
          </div>
        </div>
      </div>
    ))}
  </section>
);
