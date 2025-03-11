import { logColor } from "../../../utils/colors";
import { PaymentController } from "../interfaces/PaymentController";
import { NewDigitalPaymentSystem } from "../new-digital-payment-system/NewDigitalPaymentSystem";

export class NewDigitalPaymentAdapter implements PaymentController {
  private newPaymentSystem: NewDigitalPaymentSystem;

  constructor(newPaymentSystem: NewDigitalPaymentSystem) {
    this.newPaymentSystem = newPaymentSystem;
  }

  executePayment(amount: number): void {
    logColor(`Realizando pago atraves del adapter...`, 'cyan');
    this.newPaymentSystem.makePayment(amount);
  }
}