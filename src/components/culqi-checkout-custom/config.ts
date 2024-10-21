import { type CulqiConfig, type PaymentMethods } from './types';

export function getConfig({
  settings,
  client,
  options,
  appearance,
}: Partial<CulqiConfig>): Partial<CulqiConfig> {
  const paymentMethods: PaymentMethods = {
    yape: true,
    tarjeta: true,
    billetera: true,
    bancaMovil: true,
    agente: true,
    cuotealo: true,
  };

  return {
    settings: {
      title: 'Virtual Box S.A.C',
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
      buttonCardPayText: 'Regalar el monto de',
      menuType: 'sliderTop',
      logo: 'http://www.childrensociety.ms/wp-content/uploads/2019/11/MCS-Logo-2019-no-text.jpg',
      rules: {
        '.Culqi-ToolBanner': {
          // backgroundColor: 'red',
        },
        '.Culqi-Button': {
          marginBottom: '0',
        },
        '.Culqi-Main-Container aside > div > div': {
          padding: '0',
        },
      },
      ...appearance,
    },
  };
}
