export const URL_API = {
  BASE_URL: process.env.VITE_BASE_URL,
  PRODUCTS_URL: '/products'
};

const PRODUCTS_API = `${URL_API.BASE_URL}${URL_API.PRODUCTS_URL}`;

export { PRODUCTS_API };
