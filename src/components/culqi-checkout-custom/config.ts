import { type CulqiConfig, type PaymentMethods } from './types';

export function getConfig({
  settings,
  client,
  options,
  appearance,
}: Partial<CulqiConfig>): Partial<CulqiConfig> {
  const paymentMethods: PaymentMethods = {
    tarjeta: true,
    yape: true,
    billetera: true,
    bancaMovil: true,
    agente: true,
    cuotealo: true,
  };

  return {
    settings: {
      title: 'Hola Mundo S.A.C',
      currency: 'PEN', // Formato ISO 4217
      ...settings,
    },
    client,
    options: {
      lang: 'auto',
      installments: true,
      modal: true,
      paymentMethods,
      paymentMethodsSort: Object.keys(paymentMethods),
      ...options,
    },
    appearance: {
      theme: 'default',
      buttonCardPayText: 'Total a pagar',
      menuType: 'sliderTop',
      logo: 'https://img.freepik.com/premium-vector/hello-world-icon-white-greeting-text-orange-bubble-speech_101884-1663.jpg',
      ...appearance,
    },
  };
}
