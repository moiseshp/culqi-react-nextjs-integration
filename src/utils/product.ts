export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    name: 'Camiseta de Algodón',
    description: 'Básica de algodón.',
    price: 19.99,
    image:
      'https://cdn.pixabay.com/photo/2017/08/10/08/00/shirt-2619788_1280.jpg',
  },
  {
    name: 'Mochila de Viaje',
    description: 'Resistente al agua.',
    price: 45.49,
    image:
      'https://cdn.pixabay.com/photo/2018/03/24/11/15/travel-bag-3256390_1280.jpg',
  },
  {
    name: 'Auriculares Inalámbricos',
    description: 'Inalámbricos.',
    price: 118.99,
    image:
      'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_1280.jpg',
  },
];
