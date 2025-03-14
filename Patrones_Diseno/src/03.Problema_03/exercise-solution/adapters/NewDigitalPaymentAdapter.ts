import { logColor } from "../../../utils/colors";
import { IPayment } from "../interfaces/IPayment";
import { NewDigitalPaymentSystem } from "../new-digital-payment-system/NewDigitalPaymentSystem";

export class NewDigitalPaymentAdapter implements IPayment {
  private newPaymentSystem: NewDigitalPaymentSystem;

  constructor(newPaymentSystem: NewDigitalPaymentSystem) {
    this.newPaymentSystem = newPaymentSystem;
  }

  executePayment(amount: number): void {
    logColor(`Realizando pago atraves del adapter...`, 'cyan');
    this.newPaymentSystem.makePayment(amount);
  }
}