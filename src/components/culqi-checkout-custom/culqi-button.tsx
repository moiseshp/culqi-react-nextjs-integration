/**
 * Culqi Checkout Custom:
 * https://docs.culqi.com/es/documentacion/checkout/v4/culqi-checkout-custom/
 */
import { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
import { getConfig } from './config';
import { Culqi, CulqiConfig } from './types';
import { loadScript } from './load-script';

const CULQI_URL = 'https://js.culqi.com/checkout-js';
const API_PUBLIC_KEY = process.env.NEXT_PUBLIC_API_PUBLIC_KEY;

type CulqiButtonProps = {
  onProcessPaymentCharge: (token: string) => void;
  config: Partial<CulqiConfig>;
  children: React.ReactNode;
};

export const CulqiButton: React.FC<CulqiButtonProps> = ({
  onProcessPaymentCharge,
  config,
  children,
}) => {
  const [culqi, setCulqi] = useState<Culqi>();
  const { client, settings } = config;
  const initializeConfig = getConfig({ settings, client });

  useEffect(() => {
    const cleanupScript = loadScript(CULQI_URL, () => {
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
          onProcessPaymentCharge(token);
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

  if (!culqi) return;

  return <button onClick={() => culqi.open()}>{children}</button>;
};
