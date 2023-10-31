import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// assets
import DropdownChevronIcon from 'assets/images/dropdown_chevron.svg';

// constants
import { LIST_ITEM_NAVIGATION } from 'constants/listItem';

// layouts
import DropdownBox from 'layouts/Header/Dropdown';

// components
import Image from 'components/common/Image';

// styles
import './index.css';

interface Props {
  isDrawerOpen: boolean;
  isOpenDrawer: () => void;
}

interface NavItem {
  name: string;
  to: string;
  dropdown?: NavItem[];
}

const EndNavbar: React.FC<Props> = ({ isDrawerOpen, isOpenDrawer }): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<Boolean>(false);

  useEffect(() => {
    setIsDropdownOpen(isDropdownOpen);
  }, [isDropdownOpen]);

  const openList = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderNavItem = (el: NavItem, index: number): JSX.Element => {
    const { to, name, dropdown } = el;

    if (!dropdown) {
      return (
        <Link to={to} className='navbar-link' key={index}>
          {name}
        </Link>
      );
    } else {
      return (
        <button type='button' className='btn dropdown-menu-box' onClick={openList} key={index}>
          <span className='navbar-link'>{name}</span>
          {dropdown.length > 0 && <Image src={DropdownChevronIcon} alt='cart' />}

          <DropdownBox children={dropdown} />
        </button>
      );
    }
  };

  return (
    <section className={`navbar-box-end-container ${isDrawerOpen ? 'show-drawer' : ''}`}>
      <button className='btn close-drawer' onClick={isOpenDrawer} aria-label='Close'>
        <i className='fa-solid fa-xmark'></i>
      </button>

      <div className='navbar-group'>
        <ul className='wrapper-container navbar-group-list list-unstyled'>
          {LIST_ITEM_NAVIGATION.map((el, index) => (
            <li className='navbar-item' key={index}>
              {renderNavItem(el, index)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(EndNavbar);
