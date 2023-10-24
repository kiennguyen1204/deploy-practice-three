import RouterViews from './router';

// layouts
import { Footer } from 'layouts/Footer';
import Navbar from 'layouts/Header/Navbar';
import { useState } from 'react';
import CartProvider from './contexts/CartProvider';

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='App'>
      <RouterViews
        header={
          <CartProvider>
            <Navbar searchValue={searchValue} onSetSearchValue={setSearchValue} />
          </CartProvider>
        }
        children={undefined}
        footer={<Footer />}
        searchValue={searchValue}></RouterViews>
    </div>
  );
};

export default App;
