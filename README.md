# Culqi React & Next.js Integration

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> ⚠️ **Advertencia:** Este proyecto aún está en desarrollo. ¡Contribuciones son bienvenidas!


## Descripción

Este proyecto proporciona una integración rápida y sencilla del sistema de pagos de [Culqi](https://culqi.com) en aplicaciones construidas con **React** o **Next.js**. No es necesario instalar ninguna librería adicional. La integración utiliza el script oficial de Culqi: [https://js.culqi.com/checkout-js](https://js.culqi.com/checkout-js) para implementar la versión **Culqi Checkout Custom**.

Esta versión permite personalizar la experiencia de pago y está basada en la documentación oficial:  
[Culqi Checkout Custom - Documentación](https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/).


## Integración Culqi (Quickstart)

Sigue los siguientes pasos para integrar **Culqi Checkout Custom** en tu aplicación **React** o **NextJS**.

> ⚠️ **Importante:** Debes tener acceso a tus llaves pública y privada los cuales los puedes encontrar en la sección [desarrollo](https://mipanel.culqi.com/development/apikeys) del panel de tu comercio. Si no tienes un comercio registrado primero [Afiliáte aquí](https://afiliate.culqi.com/online/step1).


### 1. Configura tus credenciales

Configura tus llaves pública y privada en una variable de entorno. Si estás en un entorno local crea un archivo `.env.local`:

```env
NEXT_PUBLIC_API_PUBLIC_KEY=tu_public_key
API_PRIVATE_KEY=tu_secret_key
```

### 2. Agrega el script de Culqi en tu proyecto

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


## Prueba este proyecto en tu entorno local

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

3. Configura tus llaves API en un archivo `.env.local`:
    ```env
    NEXT_PUBLIC_API_PUBLIC_KEY=tu_public_key
    API_PRIVATE_KEY=tu_secret_key
    ```

4. Ejecuta el proyecto:
    - Para **NextJS**:
      ```bash
      npm run dev
      ```

## Uso

El componente Culqi se puede usar en aplicaciones React o Next.js:

```js
import CulqiPayment from './components/CulqiPayment';

<CulqiPayment amount={1000} currency="PEN" />;
```

## Licencia

Este proyecto está bajo la Licencia MIT.