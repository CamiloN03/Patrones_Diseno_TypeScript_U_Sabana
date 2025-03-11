import { logColor } from "../../../utils/colors";

export class NewDigitalPaymentSystem {
  makePayment(value: number): void {
    logColor(`Se esta realizando un pago en ${NewDigitalPaymentSystem.name}, por un valor de: ${value}`, 'magenta');
  }
}