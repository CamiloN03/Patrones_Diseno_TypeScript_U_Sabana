import { NewDigitalPaymentAdapter } from "./adapters/NewDigitalPaymentAdapter";
import { CreditCardService } from "./services/CreditCardService";
import { PayPalService } from "./services/PayPalService";
import { NewDigitalPaymentSystem } from "./new-digital-payment-system/NewDigitalPaymentSystem";
import { printBanner } from "./utils/utils";
import { IPayment } from "./interfaces/IPayment";


printBanner();

function payNow(paymentMethod: IPayment, amount: number) {
  paymentMethod.executePayment(amount);
}

const creditCardPayment = new CreditCardService();
const paypalPayment = new PayPalService();

const newPaymentSystem = new NewDigitalPaymentSystem();
const newPaymentAdapter = new NewDigitalPaymentAdapter(newPaymentSystem);


payNow(creditCardPayment, 100000);
payNow(paypalPayment, 150000);
payNow(newPaymentAdapter, 63000);
