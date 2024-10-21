'use client';
import { PaymentButton } from '@/components/culqi-checkout-custom/payment-button';
import { type CulqiConfig } from '@/components/culqi-checkout-custom/types';
import { OrderSummary } from '@/components/order-summary';
import { Signature } from '@/components/signature';
import { Title } from '@/components/title';
import { getTotalPrice } from '@/utils/get-total-price';
import { products } from '@/utils/product';

export default function Home() {
  const totalPrice = getTotalPrice(products);
  const config: Partial<CulqiConfig> = {
    client: {
      email: 'hello@world.com',
    },
    settings: {
      amount: totalPrice * 100,
    },
  };

  const handlePaymentAction = () => {};

  return (
    <div className="max-w-96 m-auto">
      <Title />
      <OrderSummary items={products}>
        <PaymentButton onPaymentAction={handlePaymentAction} config={config}>
          Pagar S/ {totalPrice}
        </PaymentButton>
      </OrderSummary>
      <Signature />
    </div>
  );
}
