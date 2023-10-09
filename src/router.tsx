import { BrowserRouter as RouterView, Routes, Route } from 'react-router-dom';

// pages
import { Homepage } from './pages/Homepage';
import Detail from 'pages/Detail';

// constants
import ROUTE from './constants/route';

interface RouterProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Router = (props: RouterProps) => {
  const { children, header, footer } = props;

  return (
    <RouterView>
      {header && header} {/* Only render if header is defined */}
      {children}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path={ROUTE.PRODUCT} element={<Detail />} />
      </Routes>
      {footer && footer} {/* Only render if footer is defined */}
    </RouterView>
  );
};

export default Router;
