import RouterViews from './router';

// layouts
import { Footer } from 'layouts/Footer';
import Navbar from 'layouts/Header/Navbar';
import { useState } from 'react';

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='App'>
      <RouterViews
        header={<Navbar searchValue={searchValue} onSetSearchValue={setSearchValue} />}
        children={undefined}
        footer={<Footer />}
        searchValue={searchValue}></RouterViews>
    </div>
  );
};

export default App;
