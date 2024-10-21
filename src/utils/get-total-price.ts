import { type Product } from './product';

export function getTotalPrice(products: Product[]) {
  return products.reduce((total, product) => total + product.price, 0);
}
