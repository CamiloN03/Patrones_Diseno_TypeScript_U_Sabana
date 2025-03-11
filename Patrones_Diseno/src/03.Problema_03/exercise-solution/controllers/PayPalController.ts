import { logColor } from '../../../utils/colors';
import { PaymentController } from '../interfaces/PaymentController';

export class PayPalController implements PaymentController {

  executePayment(amount: number): void {
    logColor(`Procesando pago a traves de ${PayPalController.name}, por un monto de: ${amount}`, 'green');
  }

}