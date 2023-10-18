import { Product } from 'interfaces/item';

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
  id: 'sampleId',
  isSoldOut: true,
  discount: 20,
  image: '/src/assets/images/default_image.webp',
  title: 'Sample Title',
  category: 'Sample Category',
  name: 'Sample Name',
  rate: '4.5',
  totalReviews: 25,
  sale: 'Sale!',
  price: 8,
  volume: ['Volume 1', 'Volume 2'],
  description: 'Sample Description',
  reviews: 0
};

export const MOCK_DATA_CUSTOMER = {
  userName: 'Vikki Starr',
  avatar: '/src/assets/images/reviews/VikkiStarr.png',
  comment: `Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.`,
  star: 4,
  date: 'January 15, 2023'
};

export const dataCart = {
  total: 305.0,
  shipping: 50,
  payTotal: 355,
  discount: 0,
  cart: [
    {
      name: 'Mix And Match Shatter/Budder 28g (4 X 7G)',
      image: '/src/assets/images/products/rind-remix-pina-colada-snack-mix-front_2000x.webp',
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
      image: '/src/assets/images/products/rind-snacks-chewy-straw-peary-front_2000x.webp',
      price: 13.0,
      amount: 5,
      total: 65.0,
      integra: [],
      subTotal: 65.0
    }
  ]
};
