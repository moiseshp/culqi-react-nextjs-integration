'use client';
import OrderItem from '@/components/order-item';
import { products } from '@/utils/data';

export default function Home() {
  // const totalAmount = products.reduce(
  //   (total, product) => total + product.price * product.quantity,
  //   0,
  // );

  // const handleProceedToPayment = () => {
  // };

  return (
    <div className="max-w-96 m-auto">
      <header className="text-center py-3">
        <h1 className="text-xl font-bold text-zinc-300">- Checkout Fake -</h1>
      </header>
      <main className="bg-white rounded-xl shadow-2xl shadow-zinc-300 p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">Resumen de pedido</h2>
        <section className="space-y-2">
          {products.map((product) => (
            <OrderItem key={product.name} data={product} />
          ))}
        </section>
        <button>Procesar</button>
      </main>
    </div>
  );
}
