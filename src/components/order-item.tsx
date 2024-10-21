'use client';
import { memo } from 'react';
import { type Product } from '@/utils/product';

type OrderItemProps = Product;

const OrderItem: React.FC<OrderItemProps> = memo(
  ({ image, name, description, price }) => {
    return (
      <div className="border border-zinc-100 rounded-lg p-1 flex flex-row justify-between gap-3 items-center">
        <div className="flex flex-row gap-3 items-center">
          <div
            className="w-16 h-16 bg-cover bg-center rounded"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="flex-1">
            <p className="text-sm font-bold">{name}</p>
            <p className="text-xs text-zinc-400">{description}</p>
            <p className="text-sm font-bold">S/ {price}</p>
          </div>
        </div>
      </div>
    );
  },
);

OrderItem.displayName = 'OrderItem';

export { OrderItem };
