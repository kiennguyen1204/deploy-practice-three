import { memo } from 'react';

import { Link } from 'react-router-dom';

// assets
import Logo from 'assets/images/logo.svg';
import LogoMobile from 'assets/images/logo_mobile.svg';
import Menu from 'assets/images/menu.svg';

// layouts
import AccountCart from 'layouts/Header/AccountCart';

// styles
import './index.css';
import SearchBox from 'components/SearchBar';

interface Props {
  onClick: () => void;
  searchValue: string;
  onSetSearchValue: (value: string) => void;
}

const MiddleNavbar: React.FC<Props> = ({ onClick, searchValue, onSetSearchValue }): JSX.Element => {
  const handleSearch = () => {
    // handle search
  };

  return (
    <section className='navbar-container'>
      <div className='flex-space-between-container navbar-box'>
        <div className='navbar-brand-name'>
          <button className='btn menu' onClick={onClick}>
            <img src={Menu} alt='menu' />
          </button>

          <Link to='/'>
            <img src={LogoMobile} className='mobile-logo' alt='logo' />
            <img src={Logo} className='navbar-logo' alt='logo' />
          </Link>
        </div>
        <SearchBox
          searchValue={searchValue}
          onSetSearchValue={onSetSearchValue}
          onClick={handleSearch}
        />
        <AccountCart />
      </div>
    </section>
  );
};

export default memo(MiddleNavbar);
