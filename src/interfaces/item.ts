export interface Item {
  id: string;
  name: string;
  title: string;
  description?: string;
  sale?: string;
  image: string;
  reviews?: number /* numbers of reviews */;
  isSoldOut: boolean | string;
  category: string;
  price?: number;
  discount?: number;
  purity: string;
  volume: string[];
  unit: string;
  perPrice?: string | number;
  rate?: string;
  totalReviews: string;
}
