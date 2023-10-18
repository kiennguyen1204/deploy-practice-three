export interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  sale: string;
  image: string;
  reviews: number;
  isSoldOut: boolean;
  category: string;
  price: number;
  discount: number;
  volume: string[];
  rate?: string;
  totalReviews: number;
}
