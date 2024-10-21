export interface CulqiConfig {
  settings: Settings;
  client: Client;
  options: Options;
  appearance: Appearance;
}

export interface PaymentMethods {
  yape?: boolean;
  tarjeta?: boolean;
  billetera?: boolean;
  bancaMovil?: boolean;
  agente?: boolean;
  cuotealo?: boolean;
}

/**
 * Settings interface used to configure transaction details.
 * - `title`: Title for the settings.
 * - `currency`: Currency code (e.g., USD, PEN).
 * - `amount`: Mandatory when using Yape as the payment method.
 * - `order`: Mandatory for PagoEfectivo or similar payment methods.
 * - `xculqirsaid`: RSA ID, typically a public key identifier.
 * - `rsapublickey`: RSA public key used for encryption.
 */
interface Settings {
  title?: string;
  currency?: string;
  amount?: number;
  order?: string;
  xculqirsaid?: string;
  rsapublickey?: string;
}

interface Client {
  name: string;
  email: string;
}

/**
 * Options interface used to configure the payment options.
 * - `installments`: Enables or disables the installment field.
 * - `lang`: Language code for localization (e.g., 'en', 'es').
 * - `modal`: Determines if the payment form is displayed as a modal.
 * - `paymentMethods`: List of available payment methods.
 * - `container`: Optional ID of the container where the form will be rendered (e.g., '#culqi-container').
 * - `paymentMethodsSort`: An array to sort the payment options according to the order in `paymentMethods`.
 * - `inputCustoms`: An array the items options for add custom inputs.
 */
interface Options {
  installments: boolean;
  lang: string;
  modal: boolean;
  paymentMethods: PaymentMethods;
  container?: string;
  paymentMethodsSort: string[];
}

interface Appearance {
  theme: string;
  buttonCardPayText: string;
  menuType: 'sidebar' | 'sliderTop' | 'select';
  hiddenCulqiLogo?: boolean;
  logo?: string;
  rules?: any;
}

interface Token {
  id: string;
}

interface Order {
  id: string;
}

export interface Culqi {
  open: () => void;
  close: () => void;
  culqi: () => void;
  token: Token;
  order: Order;
  error: any;
}

declare global {
  interface Window {
    CulqiCheckout: any;
  }
}
