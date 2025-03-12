import { logColor } from '../../../utils/colors';
import { IPayment } from '../interfaces/IPayment';

export class CreditCardService implements IPayment {

  executePayment(amount: number): void {
    logColor(`Procesando pago a traves de ${CreditCardService.name}, por un monto de: ${amount}`, 'green');
  }

}