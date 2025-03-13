import { Mensaje } from "./Mensaje";

// Interfaz para los observadores (dispositivos)
export interface IObservador {
  emitirMensaje(mensaje: Mensaje): void;
}