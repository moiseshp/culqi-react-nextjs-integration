# Culqi React & Next.js Integration

![Culqi Vercel Page](https://culqi-react-nextjs.vercel.app/screenshot-1.png)

Puedes revisar esta integración en [Culqi React NextJS Integration](https://culqi-react-nextjs.vercel.app/) gracias a [Vercel](https://vercel.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Descripción

Este proyecto proporciona una integración rápida y sencilla del sistema de pagos de [Culqi](https://culqi.com) en aplicaciones construidas con **React** o **NextJS**. No es necesario instalar ninguna librería adicional. La integración utiliza el script oficial de Culqi: [https://js.culqi.com/checkout-js](https://js.culqi.com/checkout-js) que permite implementar la versión de [Culqi Checkout Custom](https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/).

La pasarela de **Culqi Checkout Custom** te permite habilitar los siguientes formas de pago:

- [x] Tarjetas de Crédito
- [x] Tarjetas de Débito
- [x] Yape
- [ ] PLIN y otras billeteras - WIP 🚧
- [ ] Transferencias bancarias - WIP 🚧
- [ ] Agente - WIP 🚧
- [ ] Cuotealo - WIP 🚧

## Integración Culqi (Quickstart)

Sigue los siguientes pasos para integrar **Culqi Checkout Custom** en tu aplicación **React** o **NextJS**.

> ⚠️ **Importante:** Debes tener acceso a tus llaves pública y privada los cuales los puedes encontrar en la sección [desarrollo](https://mipanel.culqi.com/development/apikeys) del panel de tu comercio. Si no tienes un comercio registrado en [Culqi](https://afiliate.culqi.com/) primero [Afiliáte aquí](https://afiliate.culqi.com/online/step1).

### Paso 1. Configura tus credenciales

Establece tus llaves pública y privada en una variable de entorno.

```env
# .env.local
NEXT_PUBLIC_API_PUBLIC_KEY=tu_public_key
API_PRIVATE_KEY=tu_secret_key
```

### Paso 2. Copia la carpeta ./culqi-checkout-custom a tu proyecto

Esta es la estructura y descripción de los archivos:

```bash
/your-project
├── culqi-checkout-custom
│   ├── __tests__           # Pruebas unitarias del módulo
│   ├── config.ts           # Configuración de Culqi y comercio
│   ├── load-script.ts      # Función para cargar el script de Culqi
│   ├── payment-button.tsx  # Componente de botón de pago 😍
│   └── types.ts            # Definición de interfaces y tipos
```

Detalle de la estructura de archivos:

- **`config.ts`**: Configuración por defecto para la integración de Culqi y los datos de tu comercio.
- **`load-script.ts`**: Función que carga dinámicamente el script de Culqi en el frontend.
- **`payment-button.tsx`**: Componente botón de pago configurado para utilizar el script de Culqi.
- **`types.ts`**: Contiene las interfaces y tipos para tipar los datos de manera segura.

### Paso 3. Agrega el componente de Botón de Pago a tu vista

Importa el componente `<PaymentButton />`. Es necesario pasarle los siguientes `props`:

| Props           | Description                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onPaymentAction | Callback para gestionar el proceso del pago.                                                                                                                                                                      |
| config          | Objeto de tipo `CulqiConfig`. Revisa la documentación de [Culqi](https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/#paso-2-configura-el-custom-culqi-checkout-para-tokenizar-la-tarjeta). |

Código de ejemplo en un componente **React** que importa el **Botón de Pago**:

```jsx
import { PaymentButton } from './culqi-checkout-custom/payment-button';
import { type CulqiConfig } from './culqi-checkout-custom/types';

export default function Checkout() {
  const totalPrice = 184.47;
  const config: Partial<CulqiConfig> = {
    settings: {
      amount: totalPrice * 100,
    },
  };

  const handlePaymentAction = () => {};

  return (
    <>
      <PaymentButton onPaymentAction={handlePaymentAction} config={config}>
        Pagar S/ {totalPrice}
      </PaymentButton>
    </>
  );
}
```

Screenshot del Checkout de Culqi:

![Culqi Checkout](https://culqi-react-nextjs.vercel.app/screenshot-3.png)

### Paso 4. Gestiona la respuesta de Culqi

Gestiona la respuesta del modal de Culqi hacia tu backend para procesar el cargo. Culqi devuelve un `string` que es un **ID Tokenizado** `token` el cual debes procesar únicamente de servidor a servidor mediante el API de Culqi.

Puedes consultas la [documentación oficial](https://apidocs.culqi.com/#tag/Cargos/Objeto-cargo) para más información sobre cómo estructurar los cargos entre Culqi y tu backend:

```jsx
const handlePaymentAction = async (token: string) => {
  /**
   * Aquí puedes implementar una request hacia tu backend enviado la siguiente información:
   * amount: number
   * currency_code: string ISO
   * source_id: ID tokenizado (token que devuelve el modal de Culqi)
   */
};
```

El siguiente código es un ejemplo con **NextJS + Server Actions** (versión 13 o superior)

```jsx
// page.tsx
const handlePaymentAction = async (token: string) => {
  const response = await processPaymentAction({
    amount: config.settings?.amount as number,
    currencyCode: config.settings?.currency as string,
    sourceId: token,
  });
};
```

```js
// actions.ts
'use server';
const API_URL = 'https://api.culqi.com/v2/charges';

interface PaymentCharge {
  amount: number;
  currencyCode: string;
  sourceId: string;
}

export async function processPaymentAction(data: PaymentCharge) {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.API_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        currency_code: data.currencyCode,
        source_id: data.sourceId,
      }),
    });
    return {
      message: 'Success payment',
    };
  } catch {
    throw new Error('error to process paymento with processPaymentAction');
  }
}
```

Según la respuesta recibida desde processPaymentAction o el servicio externo que decidas implementar puedes personalizar los mensajes de éxito o error para notificar al usuario sobre el estado de la transacción. Esto permite una mejor experiencia de usuario, adaptando la respuesta de la API de Culqi a tu flujo de negocio.

## Prueba este proyecto

### Requisitos

- Node.js 18.17 o superior.
- macOS, Windows (including WSL), y Linux están soportados.
- Llaves pública y privada de Culqi.

1. Clona este repositorio:

```bash
git clone https://github.com/moiseshp/culqi-react-nextjs-integration.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Establece tus llaves pública y privada en una variable de entorno.

```env
# .env.local
NEXT_PUBLIC_API_PUBLIC_KEY=tu_public_key
API_PRIVATE_KEY=tu_secret_key
```

4. Ejecuta el proyecto:

```bash
npm run dev
```

## Contribuciones son Bienvenidas 🎉

¡Gracias por tu interés en colaborar con este proyecto! Me encataría contar con tu ayuda para mejorar y expandir este proyecto para la comunidad. Aceptamos contribuciones de todo tipo, desde mejoras en la documentación hasta nuevas funcionalidades y correcciones de errores.

Por otro lado, si te parece que este proyecto te es útil, ¡deja una estrella en GitHub! Esto ayuda a aumentar la visibilidad y a fomentar la colaboración. Gracias por tu apoyo.

[![Star](https://img.shields.io/github/stars/moiseshp/culqi-react-nextjs-integration?style=social)](https://github.com/moiseshp/culqi-react-nextjs-integration)

## Licencia

Este proyecto está bajo la Licencia MIT.
