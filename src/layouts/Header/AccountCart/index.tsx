import { useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import { CartContext } from 'contexts/CartProvider';

// assets
import CartIcon from 'assets/images/bag.svg';

// styles
import './index.css';

const AccountCart: React.FC = (): JSX.Element => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className='navbar-box-end'>
      <div className='navbar-group-info'>
        <div className='navbar-item'>
          <Link to='/' className='item-link'>
            <span className='text'>Your account</span>
            <span className='icon'>
              <i className='fa-solid fa-user'></i>
            </span>
          </Link>
        </div>

        <div className='navbar-divider'></div>

        <Link to='/cart' className='navbar-item'>
          <button className='btn cart-button'>
            <img src={CartIcon} alt='cart' />
          </button>
          <span className='product-quantity'>{totalQuantity}</span>
        </Link>
      </div>
    </section>
  );
};

export default AccountCart;
