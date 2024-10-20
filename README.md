# Culqi React & Next.js Integration

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ⚠️ Disclaimer

Este proyecto está en **desarrollo activo** y aún no está terminado. Algunas características podrían no funcionar correctamente o estar incompletas. Se recomienda no usarlo en producción por el momento.

## Descripción

Este proyecto proporciona una integración rápida y sencilla del sistema de pagos de [Culqi](https://culqi.com) en aplicaciones construidas con **React** o **Next.js**. Ofrece una manera eficiente de gestionar pagos con tarjeta y otras funcionalidades de Culqi.

## Descripción

Este proyecto proporciona una integración rápida y sencilla del sistema de pagos de [Culqi](https://culqi.com) en aplicaciones construidas con **React** o **Next.js**. No es necesario instalar ninguna librería adicional. La integración utiliza el script oficial de Culqi: [https://js.culqi.com/checkout-js](https://js.culqi.com/checkout-js) para implementar la versión **Culqi Checkout Custom**.

Esta versión permite personalizar la experiencia de pago y está basada en la documentación oficial:  
[Culqi Checkout Custom - Documentación](https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/).


## Requisitos

- Node.js 16+
- React 18+ o Next.js 13+
- Cuenta en Culqi con llaves API.

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu-usuario/culqi-react-nextjs-integration.git
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura tus llaves API en un archivo `.env.local`:
    ```env
    REACT_APP_CULQI_PUBLIC_KEY=tu_public_key
    CULQI_SECRET_KEY=tu_secret_key
    ```

4. Ejecuta el proyecto:
    - Para **Next.js**:
      ```bash
      npm run dev
      ```
    - Para **React** (CRA o cualquier otra configuración):
      ```bash
      npm start
      ```

## Integración rápida de Culqi (Quickstart)

A continuación se muestra una guía general para integrar **Culqi Checkout Custom** en tu aplicación **React** o **Next.js**.

### 1. Agrega el script de Culqi en tu proyecto

Inserta el siguiente script en el archivo `public/index.html` de tu proyecto React, o en el archivo `_document.js` de tu proyecto Next.js, justo antes del cierre de la etiqueta `<body>`:

```html
<script src="https://js.culqi.com/checkout/v4/checkout.js"></script>
```

### 2. Crea tu botón de pago
En el componente de tu aplicación, agrega un botón que iniciará el proceso de pago cuando el usuario haga clic:

```js
<button onClick={openCulqiCheckout}>Pagar con Culqi</button>
```

### 3. Configura y abre el Checkout
Dentro de tu componente, configura la función openCulqiCheckout para inicializar el Checkout de Culqi:

```jsx
function openCulqiCheckout() {
    Culqi.settings({
        title: 'Tu tienda',
        currency: 'PEN',
        description: 'Producto de ejemplo',
        amount: 1000  // En céntimos (por ejemplo, S/.10.00)
    });

    Culqi.open();
}
```

### 4. Gestiona la respuesta del pago
Asegúrate de tener configurado el callback onCulqiEvent para procesar la respuesta de Culqi:

```jsx
window.Culqi = function() {
    if (Culqi.token) {
        const token = Culqi.token.id;
        // Aquí envías el token a tu servidor para procesar el pago
        console.log('Token recibido:', token);
    } else {
        console.log('Error:', Culqi.error);
    }
};
```

### 5. Procesa el pago en el servidor
Debes enviar el token generado por Culqi a tu servidor backend para completar el pago. El servidor será responsable de realizar la petición a la API de Culqi con el token recibido.

Ejemplo de integración con Node.js:

```js
const axios = require('axios');

async function procesarPago(token) {
    const response = await axios.post('https://api.culqi.com/v2/charges', {
        amount: 1000,
        currency_code: 'PEN',
        email: 'correo@ejemplo.com',
        source_id: token
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.CULQI_SECRET_KEY}`,
            'Content-Type': 'application/json'
        }
    });
    
    return response.data;
}
```

## Uso

El componente Culqi se puede usar en aplicaciones React o Next.js:

```js
import CulqiPayment from './components/CulqiPayment';

<CulqiPayment amount={1000} currency="PEN" />;
```

## Licencia

Este proyecto está bajo la Licencia MIT.