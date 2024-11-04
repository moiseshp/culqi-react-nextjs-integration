# Culqi React & Next.js Integration

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> ⚠️ **Advertencia:** Este proyecto aún está en desarrollo. ¡Contribuciones son bienvenidas!

## Descripción

Este proyecto proporciona una integración rápida y sencilla del sistema de pagos de [Culqi](https://culqi.com) en aplicaciones construidas con **React** o **NextJS**. No es necesario instalar ninguna librería adicional. La integración utiliza el script oficial de Culqi: [https://js.culqi.com/checkout-js](https://js.culqi.com/checkout-js) que permite implementar la versión de [Culqi Checkout Custom](https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/).

La pasarela de **Culqi Checkout Custom** te permite habilitar los siguientes formas de pago:

- Tarjetas de Crédito.
- Tarjetas de Débito.
- Transferencias bancarias.
- Yape, Plin, ... (+ otras billeteras).
- Agente.
- Cuotealo.

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

### 2. Copia la carpeta de **culqi-checkout-custom** a tu proyecto

Esta carpeta contiene el componente de Botón de Pago y los archivos necesarios para la integración con Culqi:

```bash
./my-project
  ./culqi-checkout-custom
    ./__tests__           # Pruebas unitarias del módulo
    - config.ts           # Configuración de Culqi y comercio
    - load-script.ts      # Función para cargar el script de Culqi
    - payment-button.tsx  # Componente del botón de pago
    - types.ts            # Definición de interfaces y tipos
  ...
```

Estructura de archivos de la carpeta **`culqi-checkout-custom`:**

- **`config.ts`**: Contiene la configuración por defecto para la integración de Culqi y los datos de tu comercio.
- **`load-script.ts`**: Función que carga dinámicamente el script de Culqi en el frontend.
- **`payment-button.tsx`**: Componente React para el botón de pago, que utiliza la configuración y el script de Culqi.
- **`types.ts`**: Contiene las interfaces y tipos para tipar los datos de manera segura.

### 3. Agrega el componente de botón de Pago

```jsx
<PaymentButton onPaymentAction={...} config={..}>
  Pagar S/ 320.00
</PaymentButton>
```

Código extendido con la configuración que el botón de pago necesita:

```jsx
import { PaymentButton } from './culqi-checkout-custom/payment-button';
import { type CulqiConfig } from './culqi-checkout-custom/types';

function Checkout() {
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
      ...
    </>
  )
}
...
```

### 4. Gestiona la respuesta del pago

### 5. Procesa el pago en el servidor

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
