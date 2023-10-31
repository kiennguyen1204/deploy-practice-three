import { BrowserRouter as RouterView, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// pages
const LazyHomePage = lazy(() => import('pages/Homepage'));
const LazyDetail = lazy(() => import('pages/Detail'));
const LazyCategoryProduct = lazy(() => import('pages/Category'));
const LazyCheckout = lazy(() => import('pages/Checkout'));

// components
import LoadingSpinner from 'components/common/Loading';

// constants
import ROUTE from './constants/route';

// contexts
import ProductsProvider from 'contexts/ProductsProvider';
import CartProvider from 'contexts/CartProvider';

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
              <Suspense fallback={<LoadingSpinner />}>
                <LazyHomePage />
              </Suspense>
            </ProductsProvider>
          }
        />
        <Route
          path={ROUTE.PRODUCT}
          element={
            <ProductsProvider>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyDetail />
              </Suspense>
            </ProductsProvider>
          }
        />
        <Route
          path={ROUTE.CATEGORY_PAGE}
          element={
            <ProductsProvider>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyCategoryProduct searchValue={searchValue} />
              </Suspense>
            </ProductsProvider>
          }
        />
        <Route
          path={ROUTE.CART_PAGE}
          element={
            <CartProvider>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyCheckout />
              </Suspense>
            </CartProvider>
          }
        />
      </Routes>
      {footer && footer} {/* Only render if footer is defined */}
    </RouterView>
  );
};

export default Router;
