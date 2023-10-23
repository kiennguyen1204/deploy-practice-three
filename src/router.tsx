import { BrowserRouter as RouterView, Routes, Route } from 'react-router-dom';

// pages
import { Homepage } from './pages/Homepage';
import Detail from 'pages/Detail';
import { CategoryProduct } from 'pages/Category';

// constants
import ROUTE from './constants/route';
import { Checkout } from './pages/Checkout';
import ProductsProvider from './contexts/ProductsProvider';

interface RouterProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  searchValue: string;
}

const Router = (props: RouterProps) => {
  const { children, header, footer, searchValue } = props;

  return (
    <ProductsProvider>
      <RouterView>
        {header && header} {/* Only render if header is defined */}
        {children}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path={ROUTE.PRODUCT} element={<Detail />} />
          <Route
            path={ROUTE.CATEGORY_PAGE}
            element={<CategoryProduct searchValue={searchValue} />}
          />
          <Route path={ROUTE.CART_PAGE} element={<Checkout />} />
        </Routes>
        {footer && footer} {/* Only render if footer is defined */}
      </RouterView>
    </ProductsProvider>
  );
};

export default Router;
