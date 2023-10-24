import { BrowserRouter as RouterView, Routes, Route } from 'react-router-dom';

// pages
import { Homepage } from './pages/Homepage';
import Detail from 'pages/Detail';
import { CategoryProduct } from 'pages/Category';

// constants
import ROUTE from './constants/route';
import { Checkout } from './pages/Checkout';
import ProductsProvider from './contexts/ProductsProvider';
import CartProvider from './contexts/CartProvider';

interface RouterProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  searchValue: string;
}

const Router = (props: RouterProps) => {
  const { children, header, footer, searchValue } = props;

  return (
    <RouterView>
      {header && header} {/* Only render if header is defined */}
      {children}
      <Routes>
        <Route
          path='/'
          element={
            <ProductsProvider>
              <Homepage />
            </ProductsProvider>
          }
        />
        <Route
          path={ROUTE.PRODUCT}
          element={
            <ProductsProvider>
              <Detail />
            </ProductsProvider>
          }
        />
        <Route
          path={ROUTE.CATEGORY_PAGE}
          element={
            <ProductsProvider>
              <CategoryProduct searchValue={searchValue} />
            </ProductsProvider>
          }
        />
        <Route
          path={ROUTE.CART_PAGE}
          element={
            <CartProvider>
              <Checkout />
            </CartProvider>
          }
        />
      </Routes>
      {footer && footer} {/* Only render if footer is defined */}
    </RouterView>
  );
};

export default Router;
