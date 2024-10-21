import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Culqi React & NextJS Integration',
  description:
    'Culqi React & NextJS Integration es una integración rápida y fácil para incorporar pagos a través de Culqi en aplicaciones desarrolladas con React o Next.js. Ideal para sitios que deseen procesar pagos seguros utilizando la API de Culqi en sus aplicaciones React o NextJS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-zinc-50">{children}</body>
    </html>
  );
}
