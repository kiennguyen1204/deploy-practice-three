import { Product } from './item';

export interface Cart extends Product {
  amount: number;
  total: number;
  subTotal: number;
  quantity: number;
  initialPrice: number;
}
