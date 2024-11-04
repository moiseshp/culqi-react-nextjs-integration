'use server';
/**
 * Revisa la documentación para gestionar los cargos:
 * https://apidocs.culqi.com/#tag/Cargos/Objeto-cargo
 */
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
