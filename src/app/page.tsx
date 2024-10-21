'use client';
import { CulqiButton } from '@/components/culqi-checkout-custom/culqi-button';
import { type CulqiConfig } from '@/components/culqi-checkout-custom/types';
import { OrderSummary } from '@/components/order-summary';
import { Title } from '@/components/title';
import { getTotalPrice } from '@/utils/get-total-price';
import { products } from '@/utils/product';

export default function Home() {
  const config: Partial<CulqiConfig> = {
    settings: {
      currency: 'PEN',
      amount: 10000,
      order: 'ord_live_d1P0Tu1n7Od4nZdp',
    },
    client: {
      name: 'Yennifer Almeyda',
      email: 'yennifer@gmail.com',
    },
  };

  return (
    <div className="max-w-96 m-auto">
      <Title />
      <OrderSummary items={products}>
        <CulqiButton onProcessPaymentCharge={() => {}} config={config}>
          Pagar S/ {getTotalPrice(products)}
        </CulqiButton>
      </OrderSummary>
    </div>
  );
}
