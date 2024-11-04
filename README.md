# Culqi React & Next.js Integration

![Culqi Vercel Page](https://culqi-react-nextjs.vercel.app/screenshot-1.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> ⚠️ **Advertencia:** Este proyecto aún está en desarrollo. ¡Contribuciones son bienvenidas!

## Descripción

Este proyecto proporciona una integración rápida y sencilla del sistema de pagos de [Culqi](https://culqi.com) en aplicaciones construidas con **React** o **NextJS**. No es necesario instalar ninguna librería adicional. La integración utiliza el script oficial de Culqi: [https://js.culqi.com/checkout-js](https://js.culqi.com/checkout-js) que permite implementar la versión de [Culqi Checkout Custom](https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/).

La pasarela de **Culqi Checkout Custom** te permite habilitar los siguientes formas de pago:

- Tarjetas de Crédito ✅
- Tarjetas de Débito ✅
- Yape, Plin, ... (+ otras billeteras) ✅
- Transferencias bancarias - WIP 🚧
- Agente - WIP 🚧
- Cuotealo - WIP 🚧

## Integración Culqi (Quickstart)

Sigue los siguientes pasos para integrar **Culqi Checkout Custom** en tu aplicación **React** o **NextJS**.

> ⚠️ **Importante:** Debes tener acceso a tus llaves pública y privada los cuales los puedes encontrar en la sección [desarrollo](https://mipanel.culqi.com/development/apikeys) del panel de tu comercio. Si no tienes un comercio registrado en [Culqi](https://afiliate.culqi.com/) primero [Afiliáte aquí](https://afiliate.culqi.com/online/step1).

### 1. Configura tus credenciales

Establece tus llaves pública y privada en una variable de entorno.

```env
# .env.local
NEXT_PUBLIC_API_PUBLIC_KEY=tu_public_key
API_PRIVATE_KEY=tu_secret_key
```

### 2. Copia la carpeta ./culqi-checkout-custom a tu proyecto

Esta es la estructura y descripción de los archivos:

```bash
your-project
├── culqi-checkout-custom
│   ├── __tests__           # Pruebas unitarias del módulo
│   ├── config.ts           # Configuración de Culqi y comercio
│   ├── load-script.ts      # Función para cargar el script de Culqi
│   ├── payment-button.tsx  # Componente de botón de pago 😍
│   └── types.ts            # Definición de interfaces y tipos
```

Estructura de archivos de la carpeta `culqi-checkout-custom`:

- **`config.ts`**: Configuración por defecto para la integración de Culqi y los datos de tu comercio.
- **`load-script.ts`**: Función que carga dinámicamente el script de Culqi en el frontend.
- **`payment-button.tsx`**: Componente botón de pago configurado para utilizar el script de Culqi.
- **`types.ts`**: Contiene las interfaces y tipos para tipar los datos de manera segura.

### 3. Agrega el componente de botón de Pago a tu vista

Importa el componente `<PaymentButton />`. Considera que es necesario pasarle los siguientes parámetros como `props`:

| Props           | Description                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onPaymentAction | Callback para gestionar con el proceso del pago.                                                                                                                                                                  |
| config          | Objeto de tipo `CulqiConfig`. Revisa la documentación de [Culqi](https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/#paso-2-configura-el-custom-culqi-checkout-para-tokenizar-la-tarjeta). |

Ejemplo de component en **React** que importa el **Botón de Pago**:

```jsx
import { PaymentButton } from './culqi-checkout-custom/payment-button';
import { type CulqiConfig } from './culqi-checkout-custom/types';

export default function Checkout() {
  const totalPrice = 184.47;
  const config: Partial<CulqiConfig> = {
    settings: {
      amount: totalPrice * 100,
    },
    ...
  };

  const handlePaymentAction = () => {};

  return (
    <>
      ...
      <PaymentButton onPaymentAction={handlePaymentAction} config={config}>
        Pagar S/ {totalPrice}
      </PaymentButton>
    </>
  )
}
```

Screenshot del Checkout de Culqi:

![Culqi Checkout](https://culqi-react-nextjs.vercel.app/screenshot-2.png)

### 4. Gestiona la respuesta de Culqi

### 5. Procesa la transacción (Sólo posible de lado del Servidor)

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

## ⭐ Apóyame

Si te parece que este proyecto te es útil, ¡deja una estrella en GitHub! Esto ayuda a aumentar la visibilidad y a fomentar la colaboración. Gracias por tu apoyo.

[![Star](https://img.shields.io/github/stars/moiseshp/culqi-react-nextjs-integration?style=social)](https://github.com/moiseshp/culqi-react-nextjs-integration)

## Licencia

Este proyecto está bajo la Licencia MIT.

This site was built with [NextJS](https://nextjs.org/) and hosted on [Vercel](https://vercel.com)
