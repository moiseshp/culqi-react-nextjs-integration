import { render, screen } from '@testing-library/react';
import { CULQI_CHECKOUT_SCRIPT, PaymentButton } from '../payment-button';
import { loadScript } from '@/components/culqi-checkout-custom/load-script';
import userEvent from '@testing-library/user-event';

jest.mock('@/components/culqi-checkout-custom/load-script', () => ({
  loadScript: jest.fn((_url, callback) => {
    callback();
    return jest.fn();
  }),
}));

const mockCulqiOpen = jest.fn();
const mockCulqiClose = jest.fn();

beforeEach(() => {
  window.CulqiCheckout = jest.fn().mockImplementation(() => ({
    token: { id: 'test_token' },
    open: mockCulqiOpen,
    close: mockCulqiClose,
  }));
});

afterEach(() => {
  jest.clearAllMocks();
});

const mockPaymentButton = {
  onPaymentAction: jest.fn(),
  config: {},
};

describe('PaymentButton Component', () => {
  it('should call loadScript and execute onLoad correctly', () => {
    render(<PaymentButton {...mockPaymentButton}>Pay Now</PaymentButton>);

    expect(loadScript).toHaveBeenCalledWith(
      CULQI_CHECKOUT_SCRIPT,
      expect.any(Function),
    );
  });

  it('should render the button with the given children text', () => {
    render(<PaymentButton {...mockPaymentButton}>Pay Now</PaymentButton>);

    const button = screen.getByText(/Pay Now/i);
    expect(button).toBeInTheDocument();
  });

  it('should call culqi.open() when button is clicked', async () => {
    render(<PaymentButton {...mockPaymentButton}>Pay Now</PaymentButton>);

    const button = screen.getByText(/Pay Now/i);
    const user = userEvent.setup();
    await user.click(button);

    expect(mockCulqiOpen).toHaveBeenCalledTimes(1);
  });
});
