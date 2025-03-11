import { logColor } from '../../../utils/colors';
import { PaymentController } from '../interfaces/PaymentController';

export class CreditCardController implements PaymentController {

  executePayment(amount: number): void {
    logColor(`Procesando pago a traves de ${CreditCardController.name}, por un monto de: ${amount}`, 'green');
  }

}