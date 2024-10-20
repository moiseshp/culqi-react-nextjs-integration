'use client';

import OrderItem from './order-item';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type OrderSummaryProps = {
  products: Product[];
  totalAmount: number;
  onProceedToPayment: () => void;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  products,
  totalAmount,
  onProceedToPayment,
}) => {
  return (
    <div>
      <div className="mb-6">
        <ul className="space-y-4">
          {products.map((product) => (
            <OrderItem key={product.id} />
          ))}
        </ul>
      </div>
      <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-4">
        <span>Total:</span>
        <span>S/ {totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
