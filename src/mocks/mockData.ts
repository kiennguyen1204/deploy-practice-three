import { Product } from 'interfaces/item';
import { Cart } from '../interfaces/cart';

export const DATA_ITEM = {
  image: 'test-image.jpg',
  subtitle: 'Test Subtitle',
  title: 'Test Title',
  description: 'Test Description',
  to: '/test-link'
};

export const MOCK_PROPS = {
  image: '/sample_image.png',
  title: 'Sample Title',
  description: 'Sample Description',
  to: '/sample-link',
  shop: 'Sample Shop',
  icon: '/sample_icon.png'
};

export const MOCK_ITEM: Product = {
  id: '1',
  name: 'Product A',
  title: 'Product A Title',
  description: 'Description for Product A',
  sale: '30%',
  image: 'image-url-1',
  reviews: 15,
  isSoldOut: false,
  category: 'Category A',
  price: 100,
  discount: 10,
  volume: ['100ml', '200ml'],
  totalReviews: 20,
  quantity: 50
};

export const MOCK_DATA_CUSTOMER = {
  userName: 'Vikki Starr',
  avatar: '/src/assets/images/reviews/VikkiStarr.png',
  comment: `Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.`,
  star: 4,
  date: 'January 15, 2023'
};

export const DATA_CART = {
  total: 305.0,
  shipping: 50,
  payTotal: 355,
  discount: 0,
  cart: [
    {
      name: 'Mix And Match Shatter/Budder 28g (4 X 7G)',
      image: '/src/assets/images/products/snack_yellow.webp',
      price: 120.0,
      amount: 2,
      total: 240.0,
      integra: [
        {
          namePack: 'Add Integra Pack - 4g',
          amount: 1,
          price: 2.0,
          total: 2.0
        },
        {
          namePack: 'Add Integra Pack - 8g',
          amount: 1,
          price: 3.0,
          total: 3.0
        }
      ],
      subTotal: 245.0
    },
    {
      name: 'Mix And Match Shatter/Budder 28g (4 X 7G)',
      image: '/src/assets/images/products/snack_purple.webp',
      price: 13.0,
      amount: 5,
      total: 65.0,
      integra: [],
      subTotal: 65.0
    }
  ]
};

export const MOCK_PRODUCT: Product = {
  id: '1',
  name: 'Sample Product',
  title: 'Sample Title',
  description: 'This is a sample description.',
  sale: 'Sample Sale',
  image: 'sample_image.jpg',
  reviews: 10,
  isSoldOut: false,
  category: 'Sample Category',
  price: 100,
  discount: 20,
  volume: ['100g', '200g'],
  rate: '5',
  totalReviews: 50,
  quantity: 20
};

export const MOCK_CART: Cart[] = [
  {
    ...MOCK_PRODUCT,
    amount: 2,
    total: 200,
    subTotal: 180,
    quantity: 10,
    initialPrice: 90
  }
];
