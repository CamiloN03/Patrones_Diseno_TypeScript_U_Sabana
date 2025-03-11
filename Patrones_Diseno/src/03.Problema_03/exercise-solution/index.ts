import { NewDigitalPaymentAdapter } from "./adapters/NewDigitalPaymentAdapter";
import { CreditCardController } from "./controllers/CreditCardController";
import { PayPalController } from "./controllers/PayPalController";
import { NewDigitalPaymentSystem } from "./new-digital-payment-system/NewDigitalPaymentSystem";
import { printBanner } from "./utils/utils";


printBanner();

const creditCardPayment = new CreditCardController();
const paypalPayment = new PayPalController();

const newPaymentSystem = new NewDigitalPaymentSystem();
const newPaymentAdapter = new NewDigitalPaymentAdapter(newPaymentSystem);


creditCardPayment.executePayment(100);
paypalPayment.executePayment(200);
newPaymentAdapter.executePayment(300);
