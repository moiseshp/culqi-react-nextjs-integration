# Culqi React & Next.js Integration

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> ⚠️ **Advertencia:** Este proyecto aún está en desarrollo. ¡Contribuciones son bienvenidas!


## Descripción

Este proyecto proporciona una integración rápida y sencilla del sistema de pagos de [Culqi](https://culqi.com) en aplicaciones construidas con **React** o **NextJS**. No es necesario instalar ninguna librería adicional. La integración utiliza el script oficial de Culqi: [https://js.culqi.com/checkout-js](https://js.culqi.com/checkout-js) que permite implementar la versión de [Culqi Checkout Custom](https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/).

La pasarela de **Culqi Checkout Custom** te permite habilitar los siguientes formas de pago:

- Tarjetas de Crédito.
- Tarjetas de Débito.
- Transferencias bancarias.
- Yape, Plin, ... (otras billeteras).
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

### 2. Agrega el script de Culqi en tu proyecto

Inserta el siguiente script en el archivo `public/index.html` de tu proyecto React, o en el archivo `_document.js` de tu proyecto Next.js, justo antes del cierre de la etiqueta `<body>`:

```html
<script src="https://js.culqi.com/checkout/v4/checkout.js"></script>
```

### 2. Crea tu botón de pago
En el componente de tu aplicación, agrega un botón que iniciará el proceso de pago cuando el usuario haga clic:

```js
```

### 3. Configura y abre el Checkout
Dentro de tu componente, configura la función openCulqiCheckout para inicializar el Checkout de Culqi:

```jsx

```

### 4. Gestiona la respuesta del pago
Asegúrate de tener configurado el callback para procesar la respuesta de Culqi:

```jsx

```

### 5. Procesa el pago en el servidor
Debes enviar el token generado por Culqi a tu servidor backend para completar el pago. El servidor será responsable de realizar la petición a la API de Culqi con el token recibido.

Ejemplo de integración con Node.js:

```js

```

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