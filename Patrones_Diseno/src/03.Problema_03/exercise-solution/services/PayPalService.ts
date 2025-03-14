import { logColor } from '../../../utils/colors';
import { IPayment } from '../interfaces/IPayment';

export class PayPalService implements IPayment {

  executePayment(amount: number): void {
    logColor(`Procesando pago a traves de ${PayPalService.name}, por un monto de: ${amount}`, 'green');
  }

}