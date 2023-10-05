import { Link } from 'react-router-dom';

// assets
import CartIcon from 'assets/images/bag.svg';

// styles
import './index.css';

const AccountCart: React.FC = (): JSX.Element => (
  <div className='navbar-box-end'>
    <div className='navbar-group-info'>
      <div className='navbar-item'>
        <Link to='/home' className='item-link'>
          <span className='text'>Your account</span>
          <span className='icon'>
            <i className='fa-solid fa-user'></i>
          </span>
        </Link>
      </div>

      <div className='navbar-divider'></div>

      <div className='navbar-item'>
        <button className='btn cart-button'>
          <img src={CartIcon} alt='cart' />
        </button>
        <span className='product-quantity'>0</span>
      </div>
    </div>
  </div>
);

export default AccountCart;
