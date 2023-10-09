import RouterViews from './router';

// layouts
import { Footer } from 'layouts/Footer';
import Navbar from 'layouts/Header/Navbar';

const App: React.FC = () => {
  return (
    <div className='App'>
      <RouterViews header={<Navbar />} children={undefined} footer={<Footer />}></RouterViews>
    </div>
  );
};

export default App;
