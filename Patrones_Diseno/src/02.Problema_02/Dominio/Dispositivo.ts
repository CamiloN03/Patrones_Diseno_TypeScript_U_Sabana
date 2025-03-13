import { IObservador } from "../Interfaces/IObservador";
import { Mensaje } from "../Interfaces/Mensaje";

export class Dispositivo implements IObservador {
  constructor(private readonly id: number, private readonly nombre: string) {}

  emitirMensaje(mensaje: Mensaje): void {
      console.log(`📲 Soy el Dispositivo ${this.nombre}, he escuchado mensaje de ${mensaje.remitente}: ${mensaje.contenido} (Enviado: ${mensaje.timestamp.toISOString()})`);
  }
}