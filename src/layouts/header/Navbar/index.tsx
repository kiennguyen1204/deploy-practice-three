import { useState } from 'react';

// layouts
import TopNavbar from 'layouts/header/TopNav';
import MiddleNavbar from 'layouts/header/MiddleNav';
import EndNavbar from 'layouts/header/EndNav';

// styles
import './index.css';
const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const openDrawerFunction = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className='navbar-custom navbar-expand-lg py-0'>
      <div className='container'>
        <TopNavbar />
        <MiddleNavbar onClick={openDrawerFunction} />
        <EndNavbar isOpenDrawer={openDrawerFunction} isDrawerOpen={isDrawerOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
