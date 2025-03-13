import { IObservador } from "../Interfaces/IObservador";
import { Mensaje } from "../Interfaces/Mensaje";

export class Dispositivos implements IObservador {
  constructor(private readonly id: number, private readonly nombre: string) {}

  escucharMensaje(usuario: string,mensaje: Mensaje): void {
      console.log(`📲 Soy el Dispositivo de ${usuario}, registrado como ${this.nombre}, he escuchado mensaje de ${mensaje.remitente}: ${mensaje.contenido} (Enviado: ${mensaje.timestamp.toISOString()})`);
  }
}