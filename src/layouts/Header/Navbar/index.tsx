import { useState } from 'react';

// layouts
import TopNavbar from 'layouts/Header/TopNav';
import MiddleNavbar from 'layouts/Header/MiddleNav';
import EndNavbar from 'layouts/Header/EndNav';

// styles
import './index.css';

interface Props {
  searchValue: string;
  onSetSearchValue: (value: string) => void;
}

const Navbar: React.FC<Props> = ({ searchValue, onSetSearchValue }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const openDrawerFunction = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className='navbar-custom navbar-expand-lg py-0'>
      <div className='container'>
        <TopNavbar />
        <MiddleNavbar
          searchValue={searchValue}
          onSetSearchValue={onSetSearchValue}
          onClick={openDrawerFunction}
        />
        <EndNavbar isOpenDrawer={openDrawerFunction} isDrawerOpen={isDrawerOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
