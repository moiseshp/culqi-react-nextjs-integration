import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Culqi React & NextJS Integration',
  description: 'Integración de Culqi Checkout Custom',
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
