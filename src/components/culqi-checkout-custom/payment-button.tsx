/**
 * Culqi Checkout Custom:
 * https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/
 */
import { useEffect, useState } from 'react';
import { getConfig } from './config';
import { Culqi, CulqiConfig } from './types';
import { loadScript } from './load-script';
import { Button } from '@/components/button';

export const CULQI_CHECKOUT_SCRIPT = 'https://js.culqi.com/checkout-js';
export const API_PUBLIC_KEY = process.env.NEXT_PUBLIC_API_PUBLIC_KEY;

type PaymentButtonProps = {
  onPaymentAction: (token: string) => void;
  config: Partial<CulqiConfig>;
  children: React.ReactNode;
};

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  onPaymentAction,
  config,
  children,
}) => {
  const [culqi, setCulqi] = useState<Culqi>();
  const { client, settings } = config;
  const initializeConfig = getConfig({ settings, client });

  useEffect(() => {
    const cleanupScript = loadScript(CULQI_CHECKOUT_SCRIPT, () => {
      if (!window.CulqiCheckout) return;
      const culqiCheckout: Culqi = new window.CulqiCheckout(
        API_PUBLIC_KEY,
        initializeConfig,
      );
      setCulqi(culqiCheckout);

      culqiCheckout.culqi = () => {
        if (culqiCheckout.token) {
          const token = culqiCheckout.token.id;
          culqiCheckout.close();
          onPaymentAction(token);
          return;
        }
        if (culqiCheckout.order) {
          culqiCheckout.close();
          return;
        }
        console.error('Error : ', culqiCheckout.error);
      };
    });

    return () => {
      cleanupScript();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Button
      isLoading={!culqi}
      onClick={() => {
        if (!culqi) return;
        culqi.open();
      }}
    >
      {children}
    </Button>
  );
};
