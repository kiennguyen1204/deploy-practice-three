import { Footer } from './layouts/footer';
import Navbar from './layouts/header/Navbar';
import RouterViews from './router';

const App: React.FC = () => {
  return (
    <div className='App'>
      <RouterViews header={<Navbar />} children={undefined} footer={<Footer />}></RouterViews>
    </div>
  );
};

export default App;
