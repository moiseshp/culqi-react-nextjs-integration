'use client';
import { type Product } from '@/utils/data';

type OrderItemProps = {
  data: Product;
};

const OrderItem: React.FC<OrderItemProps> = ({ data: product }) => {
  return (
    <div className="border border-zinc-100 rounded-lg p-1 flex flex-row justify-between gap-3 items-center">
      <div className="flex flex-row gap-3 items-center">
        <div
          className="w-16 h-16 bg-cover bg-center rounded"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="flex-1">
          <p className="font-bold">{product.name}</p>
          <p className="text-sm text-zinc-400">{product.description}</p>
          <p className="text-sm font-bold">S/ {product.price}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default OrderItem;
