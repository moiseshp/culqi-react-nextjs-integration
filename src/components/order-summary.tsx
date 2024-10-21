'use client';
import { memo } from 'react';
import { type Product } from '@/utils/product';
import { OrderItem } from './order-item';

type OrderSummaryProps = {
  items: Product[];
  children: React.ReactNode;
};

const OrderSummary: React.FC<OrderSummaryProps> = memo(
  ({ items, children }) => {
    return (
      <main className="bg-white rounded-xl shadow-2xl shadow-zinc-300 p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">Resumen de pedido</h2>
        <section className="space-y-2">
          {items.map((product) => (
            <OrderItem key={product.name} {...product} />
          ))}
        </section>
        {children}
      </main>
    );
  },
);

OrderSummary.displayName = 'OrderSummary';

export { OrderSummary };
